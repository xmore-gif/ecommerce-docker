"use client";

import { useState } from "react";
import Link from "next/link";

const initialProducts = [
  {
    id: 1,
    name: "Aero Headphones",
    price: 129.99,
    icon: "◉",
  },
  {
    id: 2,
    name: "Nova Watch",
    price: 199.99,
    icon: "◌",
  },
];

export default function Cart() {
  const [items, setItems] = useState(initialProducts);

  const removeItem = (id: number) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-8 md:grid-cols-[1fr_350px]">
        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-bold">Your cart</h2>

          {items.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-gray-400">Your cart is empty.</p>

              <Link
                href="/products"
                className="mt-5 inline-block text-violet-400"
              >
                Continue shopping →
              </Link>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-2xl border border-white/10 p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-violet-500/10 text-3xl text-violet-300">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="mt-1 text-gray-400">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-red-400 hover:text-red-300"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-bold">Order summary</h2>

          <div className="mt-6 flex justify-between text-gray-400">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="mt-3 flex justify-between text-gray-400">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="my-6 border-t border-white/10" />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link
            href="/checkout"
            className="mt-7 block rounded-full bg-violet-500 px-6 py-3 text-center font-semibold hover:bg-violet-400"
          >
            Proceed to checkout
          </Link>
        </aside>
      </div>
    </div>
  );
} 