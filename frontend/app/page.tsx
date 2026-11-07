import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Aero Headphones",
    category: "Audio",
    price: 129.99,
    image: "/products/aero-headphones.png",
  },
  {
    id: 2,
    name: "Nova Watch",
    category: "Wearables",
    price: 199.99,
    image: "/products/nova-watch.png",
  },
  {
    id: 3,
    name: "Orbit Speaker",
    category: "Audio",
    price: 89.99,
    image: "/products/orbit-speaker.png",
  },
  {
    id: 4,
    name: "Flux Keyboard",
    category: "Accessories",
    price: 109.99,
    image: "/products/flux-keyboard.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090c] text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-xl font-bold tracking-[0.25em]"
          >
            NEXORA
          </Link>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/products/1" className="hover:text-white">
              Products
            </Link>

            <Link href="/cart" className="hover:text-white">
              Cart
            </Link>

            <Link href="/login" className="hover:text-white">
              Login
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
            Next generation commerce
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Technology designed
            <br />
            for what&apos;s next.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            Discover a curated collection of modern technology,
            designed for people who expect more from everyday products.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/products/1"
              className="rounded-full bg-violet-500 px-7 py-3 font-semibold transition hover:bg-violet-400"
            >
              Explore products
            </Link>

            <Link
              href="/cart"
              className="rounded-full border border-white/10 px-7 py-3 font-semibold transition hover:bg-white/5"
            >
              View cart
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Featured
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Selected technology
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-violet-400/30"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#08090c]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-violet-400">
                  {product.category}
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  {product.name}
                </h3>

                <p className="mt-3 text-xl font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto max-w-7xl text-sm text-gray-500">
          © 2026 NEXORA. All rights reserved.
        </div>
      </footer>
    </main>
  );
} 