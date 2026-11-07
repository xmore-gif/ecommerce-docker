export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#08090c] text-white">
      <div className="text-center">
        <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-violet-400" />
        <p className="text-sm text-gray-400">
          Loading your experience...
        </p>
      </div>
    </main>
  );
} 