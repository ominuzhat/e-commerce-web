"use client";
import { useRouter } from "next/navigation";
import notFound from "@/../../public/not-found.png";
import Image from "next/image";

const NotFound = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <div className="relative h-1/2 w-full">
          <Image
            src={notFound}
            alt="Not Found"
            fill
            style={{ objectFit: "contain" }}
            placeholder="blur"
          />
        </div>
        <button
          onClick={handleGoBack}
          className="mt-4 px-4 py-2 bg-baseColor text-white rounded-lg cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default NotFound;
