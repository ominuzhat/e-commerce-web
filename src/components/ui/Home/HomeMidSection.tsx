import Link from "next/link";
import React from "react";
import { Button } from "../button";

const HomeMidSection = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-2">
        <div className="lg:grid lg:grid-cols-2 gap-5 space-y-2 ">
          <div className="rounded-3xl midBgOne space-y-5 py-16 px-8 lg:px-16">
            <h1 className="text-green-600 text-base uppercase font-semibold tracking-widest border-t-2 border-b-2 border-baseColor py-1 w-[9.5rem]">
              Top Collection
            </h1>
            <p className="text-2xl font-semibold w-72">
              Women's Fashion Up To <span className="text-baseColor">40%</span>{" "}
              Off{" "}
            </p>
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
          <div className="rounded-3xl midBgTwo space-y-5 py-16 px-8 lg:px-16">
            <h1 className="text-green-600 text-base uppercase font-semibold tracking-widest border-t-2 border-b-2 border-baseColor py-1 w-[10rem]">
              Headphone Sale
            </h1>
            <p className="text-2xl font-semibold w-72">
              Headphone Sale Up To <span className="text-baseColor">50%</span>{" "}
              Off{" "}
            </p>
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
      </div>
    </div>
  );
};

export default HomeMidSection;
