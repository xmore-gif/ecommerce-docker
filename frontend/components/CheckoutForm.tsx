"use client";

import { useState } from "react";
import { createOrder } from "../actions/orders";

export default function CheckoutForm() {
  const [status, setStatus] = useState<
    "idle" | "processing" | "success" | "error"
  >("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("processing");

    const result = await createOrder(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-green-400/20 bg-green-400/5 p-10 text-center">
        <div className="text-5xl">✓</div>

        <h2 className="mt-5 text-3xl font-bold">
          Payment confirmed
        </h2>

        <p className="mt-3 text-gray-400">
          Your order has been successfully created.
        </p>

        <p className="mt-6 text-sm text-green-400">
          Your payment was processed successfully.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Order confirmation has been generated.
        </p>
      </div>
    );
  }

  return (
    <form
      action={handleSubmit}
      className="grid gap-8 md:grid-cols-[1fr_350px]"
    >
      {/* PAYMENT DETAILS */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
        <h2 className="text-xl font-bold">
          Payment details
        </h2>

        <div className="mt-6 space-y-5">
          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-gray-400"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-400"
            />
          </div>

          {/* CARD */}
          <div>
            <label
              htmlFor="card"
              className="mb-2 block text-sm text-gray-400"
            >
              Card number
            </label>

            <input
              id="card"
              name="card"
              inputMode="numeric"
              placeholder="4242 4242 4242 4242"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-400"
            />
          </div>

          {/* EXPIRATION + CVC */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="expiration"
                className="mb-2 block text-sm text-gray-400"
              >
                Expiration
              </label>

              <input
                id="expiration"
                name="expiration"
                placeholder="MM / YY"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-400"
              />
            </div>

            <div>
              <label
                htmlFor="cvc"
                className="mb-2 block text-sm text-gray-400"
              >
                CVC
              </label>

              <input
                id="cvc"
                name="cvc"
                inputMode="numeric"
                placeholder="123"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-400"
              />
            </div>
          </div>

          {/* SECURITY MESSAGE */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <p className="text-sm text-gray-400">
              Your payment information is processed securely.
            </p>
          </div>
        </div>
      </div>

      {/* ORDER SUMMARY */}
      <div className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-7">
        <h2 className="text-xl font-bold">
          Order summary
        </h2>

        <div className="mt-6 space-y-4 text-sm">
          <div className="flex justify-between text-gray-400">
            <span>Aero Headphones</span>
            <span>$129.99</span>
          </div>

          <div className="flex justify-between text-gray-400">
            <span>Nova Watch</span>
            <span>$199.99</span>
          </div>

          <div className="flex justify-between text-gray-400">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="border-t border-white/10 pt-4">
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>$329.98</span>
            </div>
          </div>
        </div>

        {/* PAYMENT BUTTON */}
        <button
          type="submit"
          disabled={status === "processing"}
          className="mt-7 w-full rounded-full bg-violet-500 px-6 py-3 font-semibold transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "processing"
            ? "Processing payment..."
            : "Pay $329.98"}
        </button>

        {/* ERROR */}
        {status === "error" && (
          <div className="mt-4 rounded-xl border border-red-400/20 bg-red-400/5 p-3 text-center">
            <p className="text-sm text-red-400">
              Unable to create your order. Please check your information and
              try again.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}