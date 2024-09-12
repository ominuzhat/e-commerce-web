import banner from "../../../../public/bigBannerHome.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";

const HomeBannerSection = () => {
  return (
    <div className="py-10 lg:py-20 border">
      <div className="block lg:flex bg-[#fdfbef]">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src={banner}
            alt="banner"
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="flex px-6 md:px-12 lg:px-16 xl:px-32 py-6 lg:py-0 justify-center flex-col space-y-4 md:space-y-6 w-full lg:w-1/2">
          {/* Deal Information */}
          <p className="tracking-widest font-bold text-baseColor uppercase text-sm md:text-base">
            Todays Deal 20% Off
          </p>

          {/* Headline */}
          <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
            Summer Beach Bag With Elegant Women's Accessories.
          </p>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base">
            There are many variations of passages available but the majority
            have suffered alteration in some form, making them look believable.
          </p>

          {/* Pricing Section */}
          <div className="flex items-center space-x-2 font-medium">
            <span className="text-baseColor text-3xl md:text-4xl">$650</span>
            <span className="line-through text-slate-500 text-lg md:text-xl">
              $690
            </span>
          </div>

          {/* Countdown Timer */}
          <div className="flex flex-wrap items-center space-y-2 space-x-2 py-2">
            <div className="border px-6 sm:px-8 lg:px-12 py-2 bg-white rounded-full text-center">
              <span className="text-red-500 font-bold text-xl sm:text-2xl">
                2316
              </span>{" "}
              <br /> Days
            </div>
            <div className="border px-6 sm:px-8 lg:px-12 py-2 bg-white rounded-full text-center">
              <span className="text-red-500 font-bold text-xl sm:text-2xl">
                12
              </span>{" "}
              <br /> Hours
            </div>
            <div className="border px-6 sm:px-8 lg:px-12 py-2 bg-white rounded-full text-center">
              <span className="text-red-500 font-bold text-xl sm:text-2xl">
                01
              </span>{" "}
              <br /> Minutes
            </div>
            <div className="border px-6 sm:px-8 lg:px-12 py-2 bg-white rounded-full text-center">
              <span className="text-red-500 font-bold text-xl sm:text-2xl">
                13
              </span>{" "}
              <br /> Seconds
            </div>
          </div>
          <Link href={"/"}>
            <Button className="rounded-full uppercase tracking-widest text-sm">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerSection;
