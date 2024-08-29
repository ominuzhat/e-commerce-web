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

import SingleItemsDrawer from "@/common/SingleItemsDrawer";
import { Badge } from "./ui/badge";
const CommonCardWithCarousel = ({ trendingData }: any) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsDrawerOpen(open);
  };
  return (
    <div>
      <div className="pt-10">
        <Carousel>
          <CarouselContent className="lg:gap-6 md:gap-4 sm:gap-2">
            {trendingData?.map((data: any) => (
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

export default CommonCardWithCarousel;
