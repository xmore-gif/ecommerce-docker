import Link from "next/link";
import { Suspense } from "react";

const orders = [
  {
    id: "NX-1048",
    date: "October 15, 2026",
    status: "Paid",
    total: 329.98,
  },
  {
    id: "NX-0972",
    date: "September 28, 2026",
    status: "Delivered",
    total: 199.99,
  },
];

function OrdersList() {
  return (
    <div className="mt-8 space-y-4">
      {orders.map((order) => (
        <div
          key={order.id}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm text-gray-500">Order</p>

              <h2 className="mt-1 text-xl font-bold">
                {order.id}
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                {order.date}
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs text-green-400">
                {order.status}
              </span>

              <p className="mt-3 text-xl font-bold">
                ${order.total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-[#08090c] px-8 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-white"
        >
          ← Home
        </Link>

        <div className="mt-12">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Account
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            Purchase history
          </h1>

          <p className="mt-4 text-gray-400">
            View your previous orders and payment status.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="mt-8 animate-pulse rounded-3xl border border-white/10 p-8 text-gray-500">
              Loading order history...
            </div>
          }
        >
          <OrdersList />
        </Suspense>
      </div>
    </main>
  );
} 