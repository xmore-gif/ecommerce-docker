import Link from "next/link";
import CheckoutForm from "../../components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#08090c] px-8 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <Link href="/cart" className="text-sm text-gray-400 hover:text-white">
          ← Back to cart
        </Link>

        <div className="mt-10">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Secure checkout
          </p>

          <h1 className="mt-3 text-5xl font-bold">Complete your order</h1>

          <p className="mt-4 text-gray-400">
            Your payment information is processed securely.
          </p>
        </div>

        <div className="mt-10">
          <CheckoutForm />
        </div>
      </div>
    </main>
  );
}  