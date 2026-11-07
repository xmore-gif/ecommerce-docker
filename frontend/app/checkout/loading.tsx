export default function CheckoutLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#08090c] text-white">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-violet-400" />
        <p className="mt-5 text-gray-400">Preparing secure checkout...</p>
      </div>
    </main>
  );
}