import Link from "next/link";

export const instant = false;

const products = [
  {
    id: 1,
    name: "Aero Headphones",
    category: "Audio",
    price: 129.99,
    image: "/Products/aero-headphones.png",
    description:
      "Wireless noise-cancelling headphones engineered for immersive listening and all-day comfort.",
  },
  {
    id: 2,
    name: "Nova Watch",
    category: "Wearables",
    price: 199.99,
    image: "/Products/nova-watch.png",
    description:
      "A modern smartwatch designed to keep your day connected with a sleek futuristic design.",
  },
  {
    id: 3,
    name: "Orbit Speaker",
    category: "Audio",
    price: 89.99,
    image: "/Products/orbit-speaker.png",
    description:
      "Compact wireless sound with powerful performance and a premium minimalist design.",
  },
  {
    id: 4,
    name: "Flux Keyboard",
    category: "Accessories",
    price: 109.99,
    image: "/Products/flux-keyboard.png",
    description:
      "A precision mechanical keyboard built for focused work and modern setups.",
  },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#08090c] px-6 text-white">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Product not found
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            We couldn&apos;t find that product.
          </h1>

          <Link
            href="/"
            className="mt-7 inline-block rounded-full bg-violet-500 px-6 py-3 font-semibold transition hover:bg-violet-400"
          >
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#08090c] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">

        {/* TOP NAVIGATION */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            ← Back to home
          </Link>

          <Link
            href="/cart"
            className="rounded-full border border-white/10 px-5 py-2 text-sm transition hover:bg-white/5"
          >
            Cart
          </Link>
        </div>

        {/* PRODUCT SECTION */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* PRODUCT IMAGE */}
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#08090c] shadow-2xl shadow-violet-950/20">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* PRODUCT INFORMATION */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              {product.category}
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight">
              {product.name}
            </h1>

            <p className="mt-6 text-3xl font-bold">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              {product.description}
            </p>

            {/* FEATURES */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-medium text-white">
                  Fast delivery
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Free shipping available
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-medium text-white">
                  Secure checkout
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Protected payment flow
                </p>
              </div>

            </div>

            {/* ACTIONS */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/checkout"
                className="rounded-full bg-violet-500 px-8 py-4 font-semibold transition hover:bg-violet-400"
              >
                Buy now
              </Link>

              <Link
                href="/cart"
                className="rounded-full border border-white/10 px-8 py-4 font-semibold transition hover:bg-white/5"
              >
                Add to cart
              </Link>

            </div>

          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <section className="mt-20 border-t border-white/10 pt-10">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Product details
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-gray-500">
                Category
              </p>

              <p className="mt-2 font-semibold">
                {product.category}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-gray-500">
                Availability
              </p>

              <p className="mt-2 font-semibold text-green-400">
                In stock
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-gray-500">
                Shipping
              </p>

              <p className="mt-2 font-semibold">
                Free
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
} 