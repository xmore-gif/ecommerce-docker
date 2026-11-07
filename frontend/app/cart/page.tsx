import Link from "next/link";
import Cart from "@/components/Cart";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#08090c] px-8 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            NEXORA<span className="text-violet-400">.</span>
          </Link>

          <Link
            href="/products"
            className="text-sm text-gray-400 hover:text-white"
          >
            Continue shopping
          </Link>
        </nav>

        <div className="mt-14">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Shopping bag
          </p>

          <h1 className="mt-3 text-5xl font-bold">Your cart</h1>
        </div>

        <div className="mt-10">
          <Cart />
        </div>
      </div>
    </main>
  );
}