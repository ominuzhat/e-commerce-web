"use client";
import {
  faArrowRight,
  faBagShopping,
  faEye,
  faFire,
  faHeart,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import p2 from "../../../../public/p2.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { Badge } from "../badge";

import SingleItemsDrawer from "@/common/SingleItemsDrawer";

const trendingData = [
  {
    id: 1,
    image: p2,
    badgeText: "Hot",
    productName: "Bluetooth Earphones",
    price: "$100.00",
    stars: 4,
  },
  {
    id: 2,
    image: p2,
    badgeText: "New",
    productName: "Wireless Headphones",
    price: "$150.00",
    stars: 5,
  },
  {
    id: 3,
    image: p2,
    badgeText: "Sale",
    productName: "Smart Watch",
    price: "$200.00",
    stars: 3,
  },
  {
    id: 4,
    image: p2,
    badgeText: "Out of stack",
    productName: "Gaming Mouse",
    price: "$50.00",
    stars: 4,
  },
  {
    id: 5,
    image: p2,
    badgeText: "New",
    productName: "Mechanical Keyboard",
    price: "$120.00",
    stars: 5,
  },
  {
    id: 6,
    image: p2,
    badgeText: "Sale",
    productName: "Bluetooth Speaker",
    price: "$80.00",
    stars: 4,
  },
  {
    id: 7,
    image: p2,
    badgeText: "Hot",
    productName: "Fitness Tracker",
    price: "$60.00",
    stars: 4,
  },
  {
    id: 8,
    image: p2,
    badgeText: "New",
    productName: "Smartphone",
    price: "$900.00",
    stars: 5,
  },
  {
    id: 9,
    image: p2,
    badgeText: "Sale",
    productName: "Tablet",
    price: "$300.00",
    stars: 3,
  },
  {
    id: 10,
    image: p2,
    badgeText: "Hot",
    productName: "Laptop",
    price: "$1200.00",
    stars: 5,
  },
  {
    id: 11,
    image: p2,
    badgeText: "New",
    productName: "4K TV",
    price: "$1000.00",
    stars: 4,
  },
  {
    id: 12,
    image: p2,
    badgeText: "10% off",
    productName: "Camera",
    price: "$700.00",
    stars: 5,
  },
];

const HomeHotSection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    console.log("first");
    setIsDrawerOpen(open);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-16 lg:px-2 px-5">
      <div className="flex items-center justify-between">
        <div className="text-xl lg:text-3xl font-semibold flex items-center space-x-3">
          <FontAwesomeIcon icon={faFire} className="text-baseColor" />
          <p>Hot Items</p>
        </div>
        <div>
          <Link href={"/"} className="lg:text-xl text-slate-700  ">
            View More <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
      <div className="pt-10">
        <Carousel>
          <CarouselContent className="lg:gap-6 md:gap-4 sm:gap-2">
            {trendingData?.map((data) => (
              <CarouselItem
                className=" md:basis-1/2 lg:basis-1/4 bg-footerColor rounded-xl group "
                key={data?.id}
              >
                <div className="relative">
                  <Image src={data?.image} alt={"p2"} height={50} width={450} />
                  <Badge
                    variant="outline"
                    className={` ${
                      data?.badgeText == "Hot"
                        ? "bg-skyColor"
                        : "bg-secondaryColor"
                    } 
                    ${data?.badgeText == "Out of stack" && "bg-redColor"}   
                    ${data?.badgeText == "10% off" && "bg-yellowColor"}   
                    
                    text-white px-4 py-1 absolute top-6 right-6 uppercase`}
                  >
                    {data?.badgeText}
                  </Badge>
                  <div className="space-x-2 absolute bottom-4 w-full left-[33%] transform  opacity-0 group-hover:opacity-100 group-hover:animate-fade-in-bottom">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <FontAwesomeIcon
                            icon={faEye}
                            className="bg-secondaryColor text-white rounded-full p-2 w-4 h-4 cursor-pointer hover:bg-baseColor"
                            onClick={() => setIsDrawerOpen(true)}
                          />
                        </TooltipTrigger>

                        <TooltipContent className="bg-secondaryColor text-white">
                          <p>Quick View</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          {" "}
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="bg-secondaryColor text-white rounded-full p-2 w-4 h-4 cursor-pointer hover:bg-baseColor"
                          />
                        </TooltipTrigger>
                        <TooltipContent className="bg-secondaryColor text-white">
                          <p>Add to Wishlist</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <FontAwesomeIcon
                      icon={faHeart}
                      className="bg-secondaryColor text-white rounded-full p-2 w-4 h-4 cursor-pointer hover:bg-baseColor"
                    />
                  </div>
                </div>
                <div className="space-y-2 px-5 pb-8 relative">
                  <p className="text-xl font-semibold">{data?.productName}</p>
                  <div className="space-x-1">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellowColor"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellowColor"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellowColor"
                    />
                    <FontAwesomeIcon
                      icon={faStarHalfAlt}
                      className="text-yellowColor"
                    />
                  </div>
                  <p className="text-red-500 font-semibold">{data?.price}</p>
                  <div className="absolute bottom-8 right-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          {" "}
                          <FontAwesomeIcon
                            icon={faBagShopping}
                            className="w-4 h-4 bg-secondaryColor text-white hover:bg-baseColor rounded-full p-2 cursor-pointer duration-300 hover:duration-300"
                          />
                        </TooltipTrigger>
                        <TooltipContent className="bg-secondaryColor text-white">
                          <p>Add to Cart</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className=" flex space-x-4">
            <CarouselPrevious className="absolute -left-4 p-2 rounded-full bg-secondaryColor hover:bg-baseColor cursor-pointer text-white" />
            <CarouselNext className="absolute -right-4 p-2 rounded-full bg-secondaryColor hover:bg-baseColor cursor-pointer text-white" />
          </div>
        </Carousel>
      </div>
      <SingleItemsDrawer open={isDrawerOpen} onOpenChange={handleOpenChange} />
    </div>
  );
};

export default HomeHotSection;
