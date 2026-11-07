"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#08090c] px-6 text-white">
      <div className="max-w-md text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
          Something went wrong
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          We couldn&apos;t load this page.
        </h1>

        <p className="mt-4 text-gray-400">
          Please try again. Your data is safe.
        </p>

        <button
          onClick={() => reset()}
          className="mt-7 rounded-full bg-violet-500 px-6 py-3 font-semibold hover:bg-violet-400"
        >
          Try again
        </button>
      </div>
    </main>
  );
}