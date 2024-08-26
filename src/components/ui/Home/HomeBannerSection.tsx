import React from "react";
import banner from "../../../../public/bigBannerHome.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";

const HomeBannerSection = () => {
  return (
    <div className="py-20">
      <div className="lg:flex bg-[#fdfbef]">
        <Image src={banner} alt={"banner"} />
        <div className="flex px-10 py-10 lg:py-0 lg:px-32 justify-center flex-col space-y-5">
          <p className="tracking-widest font-bold text-baseColor uppercase ">
            Todays Deal 20% Off
          </p>
          <p className="text-2xl lg:text-4xl font-semibold ">
            Summer Beach Bag With Elegant Women's Accessories.
          </p>{" "}
          <p className="text-gray-400">
            There are many variations of passages available but the majority
            have suffered alteration in some form words look even slightly
            believable.
          </p>
          <div className=" space-x-2 font-medium flex items-center">
            <span className="text-baseColor text-4xl">$650</span>
            <span className="line-through text-slate-500 text-xl">$690 </span>
          </div>
          <div className="flex items-center space-x-2 py-2">
            <div className="border px-6 lg:px-12 py-2 bg-white rounded-full text-center">
              <span className="text-red-500 font-bold text-2xl"> 2316</span>{" "}
              <br /> Days
            </div>
            <div className="border px-6 lg:px-12 py-2 bg-white rounded-full text-center">
              <span className="text-red-500 font-bold text-2xl"> 12</span>{" "}
              <br /> Hours
            </div>
            <div className="border px-6 lg:px-12 py-2 bg-white rounded-full text-center">
              <span className="text-red-500 font-bold text-2xl"> 01</span>{" "}
              <br /> Minutes
            </div>
            <div className="border px-6 lg:px-12 py-2 bg-white rounded-full text-center">
              <span className="text-red-500 font-bold text-2xl"> 13</span>{" "}
              <br /> Seconds
            </div>
          </div>
          <Link
            href={"/"}
            className="underline uppercase font-semibold text-sm text-gray-600"
          >
            <Button className="rounded-full uppercase tracking-widest">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerSection;
