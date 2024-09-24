"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const VerificationCheck = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hash = searchParams.get("hash");

  // Function to navigate back
  const handleGoBack = () => {
    router.push("/shop");
  };

  useEffect(() => {
    if (typeof window !== "undefined" && hash) {
      localStorage.setItem("access_token", hash);
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

export default VerificationCheck;
