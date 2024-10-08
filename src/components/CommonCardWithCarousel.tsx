"use client";
import {
  faEye,
  faHeart,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
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
import { renderStars } from "./CommonRating";
import Link from "next/link";
import WishListButton from "./WishListButton";
import CommonAddToCartButton from "./CommonAddToCartButton";
import { useGetCartlist } from "@/hooks/get.hook";

const CommonCardWithCarousel = ({ data, wishlist }: any) => {
  const [cartId, setCartId] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [id, setId] = useState();
  const { data: cartList } = useGetCartlist(cartId);

  const singleData = data?.find((item: any) => item?.id === id);

  const handleOpenChange = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartId = localStorage.getItem("cartId");
      setCartId(storedCartId);
    }
  }, []);

  return (
    <div>
      <div className="pt-10">
        <Carousel>
          <CarouselContent className="lg:gap-6 md:gap-4 sm:gap-2">
            {data?.map((data: any) => {
              const cartItem = cartList?.data?.items?.find(
                (cartItem: any) =>
                  cartItem?.variant?.priceOption?.product?.id === data?.id
              );
              console.log(cartItem);
              return (
                <CarouselItem
                  className="md:basis-1/2 lg:basis-1/4 bg-footerColor rounded-xl group ps-0"
                  key={data?.id}
                >
                  <div className="relative p-2 w-full h-[15rem] ">
                    <Image
                      src={data?.featuredImage}
                      alt={data?.title}
                      height={50}
                      width={450}
                      className="w-full h-full rounded-xl"
                    />
                    <Badge
                      variant="outline"
                      className={`${
                        data?.badgeText == "Hot"
                          ? "bg-skyColor"
                          : "bg-secondaryColor"
                      } 
          ${data?.badgeText == "Out of stock" && "bg-redColor"}   
          ${data?.badgeText == "10% off" && "bg-yellowColor"}   
          text-white px-4 py-1 absolute top-6 right-6 uppercase`}
                    >
                      {data?.badgeText}
                    </Badge>

                    <div className="space-x-2 absolute bottom-4 w-full left-[43%] transform opacity-0 group-hover:opacity-100 group-hover:animate-fade-in-bottom">
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
                            <WishListButton
                              wishlist={wishlist}
                              productId={data?.id}
                            />
                          </TooltipTrigger>
                          <TooltipContent className="bg-secondaryColor text-white">
                            <p>Add to Wishlist</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>

                  <div className="space-y-2 px-5 pb-8 relative">
                    <Link href={`/shop/${data?.id}`}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <p className="text-xl font-semibold text-left">
                              {data?.title?.length > 25
                                ? data?.title?.slice(0, 25) + "..."
                                : data?.title}
                            </p>
                          </TooltipTrigger>
                          <TooltipContent className="bg-secondaryColor text-white">
                            <p>{data?.title}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>

                    <p>
                      {renderStars(data?.avgRating)}
                      <span>({data?.totalReviews})</span>
                    </p>
                    <p className="font-semibold text-xs text-baseColor">
                      {data?.sales} Sold
                    </p>
                    <div className="flex gap-4 items-center">
                      {data?.priceOptions?.[0]?.variants?.[0]?.discount > 0 && (
                        <>
                          <h1 className="text-3xl text-red-500">
                            ৳
                            {data?.priceOptions?.[0]?.variants?.[0]?.totalPrice}
                          </h1>
                          <small className="line-through text-gray-400 font-semibold">
                            ৳ {data?.priceOptions?.[0]?.variants?.[0]?.price}
                          </small>
                        </>
                      )}
                      {!data?.priceOptions?.[0]?.variants?.[0]?.discount && (
                        <h2 className="text-3xl text-red-500">
                          ৳{data?.priceOptions?.[0]?.variants?.[0]?.price}
                        </h2>
                      )}
                    </div>

                    <CommonAddToCartButton data={data} />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className=" flex space-x-4">
            <CarouselPrevious className="absolute -left-4 p-2 rounded-full bg-secondaryColor hover:bg-baseColor cursor-pointer text-white" />
            <CarouselNext className="absolute -right-4 p-2 rounded-full bg-secondaryColor hover:bg-baseColor cursor-pointer text-white" />
          </div>
        </Carousel>
      </div>
      <SingleItemsDrawer
        open={isDrawerOpen}
        onOpenChange={handleOpenChange}
        singleData={singleData}
      />
    </div>
  );
};

export default CommonCardWithCarousel;
