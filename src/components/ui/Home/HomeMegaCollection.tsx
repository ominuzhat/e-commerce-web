import Link from "next/link";
import React from "react";
import { Button } from "../button";

const HomeMegaCollection = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-6 pb-10 px-2">
      <div className="rounded-3xl megaBg space-y-6 py-16 flex flex-col justify-center items-center text-center">
        <p className="tracking-widest font-bold ">Mega Collections</p>
        <p className="text-4xl font-semibold ">Huge Sale Up To 40% Off </p>{" "}
        <h1 className=" text-base uppercase font-semibold tracking-widest border-t-2 border-b-2 border-slate-700 py-1 w-[14.5rem]">
          at our outlet stores{" "}
        </h1>
        <p>
          <Link
            href={"/"}
            className="underline uppercase font-semibold text-sm text-gray-600"
          >
            <Button className="rounded-full uppercase tracking-widest">
              Shop Now
            </Button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomeMegaCollection;
