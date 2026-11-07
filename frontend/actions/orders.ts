"use server";

import { revalidatePath } from "next/cache";

export async function createOrder(formData: FormData) {
  const email = String(formData.get("email") || "");

  if (!email) {
    return {
      success: false,
      message: "Email is required.",
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 800));

  revalidatePath("/orders");

  return {
    success: true,
    message: "Order created successfully.",
    orderId: `NX-${Date.now().toString().slice(-6)}`,
  };
} 