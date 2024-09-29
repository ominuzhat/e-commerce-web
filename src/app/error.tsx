"use client";
import { useEffect } from "react";

export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center">
      <h2>Something went wrong!</h2>
      <p>Error : {error.message}</p>
      <br />
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-baseColor text-white"
      >
        Try again
      </button>
    </div>
  );
}
