"use client";
import { faArrowRight, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import brands from "../../../../public/brands.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const trendingData = [
  {
    id: 1,
    image: brands,
  },
  {
    id: 2,
    image: brands,
  },
  {
    id: 3,
    image: brands,
  },
  {
    id: 4,
    image: brands,
  },
  {
    id: 5,
    image: brands,
  },
  {
    id: 6,
    image: brands,
  },
  {
    id: 7,
    image: brands,
  },
  {
    id: 8,
    image: brands,
  },
  {
    id: 9,
    image: brands,
  },
  {
    id: 10,
    image: brands,
  },
  {
    id: 11,
    image: brands,
  },
  {
    id: 12,
    image: brands,
  },
];
const HomeBrandsSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:px-2 px-5">
      <div className="flex items-center justify-between">
        <div className="text-xl lg:text-3xl font-semibold flex items-center space-x-3">
          <FontAwesomeIcon icon={faShield} className="text-baseColor" />
          <p>Popular Brands</p>
        </div>
        <div>
          <Link href={"/"} className="lg:text-xl text-slate-700  ">
            All Brands
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
      <div className="pt-10">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent className="lg:gap-6 md:gap-4 gap-2 ">
            {trendingData?.map((data) => (
              <CarouselItem
                className="basis-1/2 md:basis-1/4 lg:basis-1/6 bg-footerColor rounded  py-8 ps-0 pe-1"
                key={data?.id}
              >
                <Image
                  src={data?.image}
                  alt={"brands"}
                  height={20}
                  width={150}
                  className="mx-auto "
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeBrandsSection;
