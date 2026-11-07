import Link from "next/link";
export const instant = false;

const products = [
  {
    id: 1,
    name: "Aero Headphones",
    category: "Audio",
    price: 129.99,
    description:
      "Wireless noise-cancelling headphones engineered for immersive listening and all-day comfort.",
    icon: "◉",
  },
  {
    id: 2,
    name: "Nova Watch",
    category: "Wearables",
    price: 199.99,
    description:
      "A modern smart watch combining fitness tracking, notifications and an elegant design.",
    icon: "◌",
  },
  {
    id: 3,
    name: "Orbit Speaker",
    category: "Audio",
    price: 89.99,
    description:
      "Compact wireless speaker delivering powerful sound in a minimal premium design.",
    icon: "◍",
  },
  {
    id: 4,
    name: "Flux Keyboard",
    category: "Accessories",
    price: 109.99,
    description:
      "Mechanical keyboard designed for creators, developers and demanding everyday workflows.",
    icon: "⌨",
  },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#08090c] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Product not found</h1>
          <Link
            href="/products"
            className="mt-6 inline-block text-violet-400"
          >
            ← Back to products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#08090c] px-8 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/products" className="text-sm text-gray-400 hover:text-white">
          ← Back to products
        </Link>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="flex aspect-square items-center justify-center rounded-[2rem] bg-gradient-to-br from-violet-500/20 to-blue-500/10 text-[10rem] text-violet-300">
            {product.icon}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              {product.category}
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              {product.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              {product.description}
            </p>

            <p className="mt-8 text-4xl font-bold">
              ${product.price.toFixed(2)}
            </p>

            <Link
              href="/cart"
              className="mt-8 w-fit rounded-full bg-violet-500 px-8 py-4 font-semibold transition hover:bg-violet-400"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}