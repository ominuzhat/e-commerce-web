"use client";
import {
  faBagShopping,
  faEye,
  faHeart,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import SingleItemsDrawer from "@/common/SingleItemsDrawer";
import { Badge } from "./ui/badge";

const CommonCard = ({ trendingData }: any) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 gap-5 mt-10 space-y-5 lg:space-y-0">
        {trendingData?.map((data: any) => (
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
                <FontAwesomeIcon icon={faStar} className="text-yellowColor" />
                <FontAwesomeIcon icon={faStar} className="text-yellowColor" />
                <FontAwesomeIcon icon={faStar} className="text-yellowColor" />
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
      <SingleItemsDrawer open={isDrawerOpen} onOpenChange={handleOpenChange} />
    </div>
  );
};

export default CommonCard;
