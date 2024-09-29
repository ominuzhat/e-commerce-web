"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react"; // Import Suspense

const VerificationCheck = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hash = searchParams.get("hash");

  const handleGoBack = () => {
    router.push("/shop");
  };

  useEffect(() => {
    if (typeof window !== "undefined" && hash) {
      localStorage.setItem("access_token", hash);

      document.cookie = `accessToken=${hash}; path=/;`;
    }
  }, [hash]);

  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-center min-h-screen">
      <div className="border p-5 rounded-xl bg-footerColor">
        <h1 className="text-xl">
          Welcome to,{" "}
          <span className="text-baseColor font-semibold">ECO-SHOP</span>
        </h1>
        <button
          onClick={handleGoBack}
          className="mt-4 px-4 py-2 bg-baseColor text-white rounded-lg cursor-pointer w-full"
        >
          Continue Shop
        </button>
      </div>
    </div>
  );
};

// Wrap the entire component with Suspense
const WrappedVerificationCheck = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <VerificationCheck />
  </Suspense>
);

export default WrappedVerificationCheck;
