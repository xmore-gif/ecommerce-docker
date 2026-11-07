<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateOrderRequest;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Payment;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Stripe\StripeClient;

class OrderController extends Controller
{
    // Historial de compras del usuario autenticado
    public function index()
    {
        $orders = Order::with(['items.product', 'payment'])
            ->where('user_id', auth('api')->id())
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'data'    => $orders
        ], 200);
    }

    // Crear orden y procesar pago mediante Stripe
    public function store(CreateOrderRequest $request)
    {
        $user = auth('api')->user();
        $itemsData = $request->items;
        $total = 0;
        $orderItemsToCreate = [];

        // Validar stock y calcular total
        foreach ($itemsData as $item) {
            $product = Product::find($item['product_id']);

            if (!$product || !$product->active) {
                return response()->json([
                    'success' => false,
                    'message' => "El producto con ID {$item['product_id']} no está disponible."
                ], 400);
            }

            if ($product->stock < $item['quantity']) {
                return response()->json([
                    'success' => false,
                    'message' => "Stock insuficiente para el producto: {$product->name}"
                ], 400);
            }

            $subtotal = $product->price * $item['quantity'];
            $total += $subtotal;

            $orderItemsToCreate[] = [
                'product'  => $product,
                'quantity' => $item['quantity'],
                'price'    => $product->price,
            ];
        }

        DB::beginTransaction();

        try {
            // 1. Crear la orden en estado 'pending'
            $order = Order::create([
                'user_id' => $user->id,
                'total'   => $total,
                'status'  => 'pending',
            ]);

            // 2. Registrar los items y actualizar stock
            foreach ($orderItemsToCreate as $item) {
                OrderItem::create([
                    'order_id'   => $order->id,
                    'product_id' => $item['product']->id,
                    'quantity'   => $item['quantity'],
                    'unit_price' => $item['price'],
                ]);

                // Reducir el stock disponible
                $item['product']->decrement('stock', $item['quantity']);
            }

            // 3. Procesar el cobro con Stripe
            $stripe = new StripeClient(env('STRIPE_SECRET'));

            $paymentIntent = $stripe->paymentIntents->create([
                'amount'               => (int) ($total * 100), // Monto en centavos (ej: $10.00 -> 1000)
                'currency'             => 'usd',
                'payment_method'       => $request->payment_method_id,
                'confirm'              => true,
                'automatic_payment_methods' => [
                    'enabled' => true,
                    'allow_redirects' => 'never',
                ],
                'description'          => "Orden #{$order->id} - Cliente: {$user->email}",
            ]);

            // 4. Registrar la transacción en la tabla Payments
            Payment::create([
                'order_id'                 => $order->id,
                'stripe_payment_intent_id' => $paymentIntent->id,
                'amount'                   => $total,
                'currency'                 => 'usd',
                'status'                   => $paymentIntent->status,
            ]);

            // 5. Actualizar la orden a 'paid'
            $order->update(['status' => 'paid']);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Compra procesada exitosamente con Stripe',
                'data'    => $order->load(['items.product', 'payment'])
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'success' => false,
                'message' => 'Error al procesar el pago con Stripe',
                'error'   => $e->getMessage()
            ], 500);
        }
    }
}