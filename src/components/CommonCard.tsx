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
import Link from "next/link";
import { renderStars } from "./CommonRating";

const CommonCard = ({ data }: any) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [id, setId] = useState();

  const singleData = data?.find((item: any) => item?.id === id);

  const handleOpenChange = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 gap-5 mt-10 space-y-5 lg:space-y-0">
        {data?.map((data: any) => (
          <div className="bg-footerColor rounded-xl group" key={data?.id}>
            <div className="relative p-2  w-full h-[15rem] ">
              <Image
                src={data?.featuredImage}
                alt={data?.title}
                height={50}
                width={450}
                className="w-full h-full rounded-xl"
              />
              <Badge
                variant="outline"
                className={` ${
                  data?.badgeText == "Hot" ? "bg-skyColor" : "bg-secondaryColor"
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
                        onClick={() => {
                          setIsDrawerOpen(true), setId(data?.id);
                        }}
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
              <p className="text-xl font-semibold">{data?.title}</p>
              <p>
                {renderStars(data?.avgRating)}
                <span>({data?.totalReviews})</span>
              </p>
              <div className="flex gap-4 items-center">
                {/* If there's a discount, show original price and discounted price */}
                {data?.priceOptions?.[0]?.discount > 0 && (
                  <>
                    <h1 className=" text-3xl text-red-500">
                      ৳{data?.priceOptions?.[0]?.totalPrice}
                    </h1>
                    <small className="line-through text-gray-400">
                      ৳ {data?.priceOptions?.[0]?.price}
                    </small>
                  </>
                )}
                {!data?.priceOptions?.[0]?.discount && (
                  <h2 className=" text-3xl text-red-500">
                    ৳{data?.priceOptions?.[0]?.price}
                  </h2>
                )}
              </div>
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
          </div>
        ))}
      </div>
      <SingleItemsDrawer
        open={isDrawerOpen}
        onOpenChange={handleOpenChange}
        singleData={singleData}
      />
    </div>
  );
};

export default CommonCard;
