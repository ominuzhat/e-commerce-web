"use client";
import {
  faArrowRight,
  faBagShopping,
  faEye,
  faHeart,
  faMobile,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import p2 from "../../../../public/p2.png";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { Badge } from "../badge";
import SingleItemsDrawer from "@/common/SingleItemsDrawer";
import { Button } from "../button";

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
];

const mobileData = [
  { id: 1, name: "Samsung", quantity: 10 },
  { id: 2, name: "Apple", quantity: 15 },
  { id: 3, name: "Xiaomi", quantity: 12 },
  { id: 4, name: "Sony", quantity: 18 },
  { id: 5, name: "Google", quantity: 5 },
  { id: 6, name: "Vivo", quantity: 14 },
  { id: 7, name: "Huawei", quantity: 17 },
  { id: 8, name: "Techno", quantity: 8 },
];

const HomeCategoriesSection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsDrawerOpen(open);
  };
  return (
    <div className="max-w-screen-xl mx-auto lg:pt-16 pb-12 lg:px-2 px-5">
      <div className="lg:grid lg:grid-cols-4 gap-5">
        <div className="border shadow-xl py-5 px-6 rounded-xl h-[35rem]">
          <p className="text-xl lg:text-2xl font-semibold">Phone Brands</p>
          <div className="my-5">
            {mobileData?.map((item, index) => (
              <div key={item?.id}>
                <div className="flex justify-between items-center space-y-2 hover:text-baseColor cursor-pointer">
                  <div className="flex items-center space-x-3 text-gray-700 hover:text-baseColor hover:ms-5 duration-300 hover:duration-300 ">
                    <FontAwesomeIcon icon={faMobile} />
                    <p className="font-medium">{item?.name}</p>
                  </div>
                  <p>({item?.quantity})</p>
                </div>
                {index < mobileData.length - 1 && <hr className="my-2" />}
              </div>
            ))}
          </div>
          <Button className="w-full"> View All Brands</Button>
        </div>
        <div className="lg:col-span-3  lg:mt-0 mt-10">
          <div className="flex items-center justify-between">
            <div className="text-xl lg:text-3xl font-semibold flex items-center space-x-3">
              <FontAwesomeIcon icon={faMobile} className="text-baseColor" />
              <p>Mobile Phones</p>
            </div>
            <div>
              <Link href={"/"} className="lg:text-xl text-slate-700  ">
                View More <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 gap-5 mt-10 space-y-5 lg:space-y-0">
            {trendingData?.map((data) => (
              <div className="bg-footerColor rounded-xl group" key={data?.id}>
                <div className="relative">
                  <Image
                    src={data?.image}
                    alt="p2"
                    height={50}
                    width={450}
                    className="w-full h-auto object-cover rounded-t-xl"
                  />
                  <Badge
                    variant="outline"
                    className={`${
                      data?.badgeText === "Hot"
                        ? "bg-skyColor"
                        : data?.badgeText === "Out of stock"
                        ? "bg-redColor"
                        : data?.badgeText === "10% off"
                        ? "bg-yellowColor"
                        : "bg-secondaryColor"
                    } text-white px-4 py-1 absolute top-6 right-6 uppercase`}
                  >
                    {data?.badgeText}
                  </Badge>
                  <div className="space-x-2 absolute bottom-4  w-full left-1/3 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-fade-in-bottom">
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <SingleItemsDrawer open={isDrawerOpen} onOpenChange={handleOpenChange} />
    </div>
  );
};

export default HomeCategoriesSection;
