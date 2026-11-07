<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'name' => 'Laptop Gamer Pro 15',
                'description' => 'Procesador Intel i7, 16GB RAM, 512GB SSD, RTX 4060',
                'price' => 1299.99,
                'stock' => 10,
                'active' => true,
            ],
            [
                'name' => 'Mouse Inalámbrico Ergonómico',
                'description' => 'Sensor óptico de alta precisión, conexión Bluetooth y 2.4G',
                'price' => 29.99,
                'stock' => 50,
                'active' => true,
            ],
            [
                'name' => 'Teclado Mecánico RGB',
                'description' => 'Switches Red silenciosos, retroiluminación RGB personalizable',
                'price' => 89.50,
                'stock' => 25,
                'active' => true,
            ],
            [
                'name' => 'Monitor 27" 144Hz 1ms',
                'description' => 'Panel IPS Full HD con soporte para FreeSync y G-Sync',
                'price' => 249.00,
                'stock' => 15,
                'active' => true,
            ],
            [
                'name' => 'Audífonos Bluetooth Noise Cancelling',
                'description' => 'Cancelación activa de ruido, hasta 30 horas de batería',
                'price' => 119.99,
                'stock' => 30,
                'active' => true,
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}