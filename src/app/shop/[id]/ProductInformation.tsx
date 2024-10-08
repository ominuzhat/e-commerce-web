"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CommonIcon,
  FaceBookIcon,
  InstragramIcon,
  TwiteerIcon,
} from "@/common/CommonSociaIcon";
import { renderStars } from "@/components/CommonRating";
import { useAddToCart } from "@/hooks/post.hook";
import WishListButton from "@/components/WishListButton";

const ProductInformation = ({ productDetails, wishlist }: any) => {
  const [selectedPriceOption, setSelectedPriceOption] = useState<any>(null);
  const [selectedVariantOption, setSelectedVariantOption] = useState<any>(null);
  const [cartId, setCartId] = useState<string | null>(null);

  const { mutate: handleAddToCart, data: cartData } = useAddToCart();
  const [count, setCount] = useState(1);
  const {
    title,
    priceOptions,
    sku,
    avgRating,
    totalReviews,
    subtitle,
    subCategory,
  } = productDetails || {};

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartId = localStorage.getItem("cartId");
      setCartId(storedCartId);
    }
  }, []);

  useEffect(() => {
    if (cartData?.data?.id) {
      if (typeof window !== "undefined") {
        localStorage.setItem("cartId", cartData?.data?.id);
      }
    }
  }, [cartData]);

  useEffect(() => {
    setSelectedPriceOption(priceOptions?.[0]);
    setSelectedVariantOption(priceOptions?.[0]?.variants[0]);
  }, [priceOptions]);

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  function priceOptionHandler(priceOption: any): void {
    setSelectedPriceOption(priceOption);
    setSelectedVariantOption(priceOption?.variants?.[0]);
  }

  function variantsHandler(variant: any): void {
    setSelectedVariantOption(variant);
  }

  const handleAddToCartItem = () => {
    const data = {
      variant: selectedVariantOption?.id,
      quantity: count,
      cartId: cartId || null,
    };

    handleAddToCart(data);
  };
  // const handleItemAddToWishlist = () => {

  //   handleAddToWishlist(productDetails?.id);
  // };

  return (
    <div>
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>
          {renderStars(avgRating)}
          <span> ({totalReviews})</span>
        </p>
        <div className="flex gap-4 items-center">
          {selectedVariantOption?.discount > 0 && (
            <>
              <h1 className=" text-3xl text-red-500">
                ৳{selectedVariantOption?.totalPrice}
              </h1>
              <small className="line-through text-gray-400 font-semibold">
                ৳ {selectedVariantOption?.price}
              </small>
            </>
          )}
          {!selectedVariantOption?.discount && (
            <h2 className=" text-3xl text-red-500">
              ৳{selectedVariantOption?.price}
            </h2>
          )}
        </div>

        <p className="text-gray-500 text-sm">
          Save {selectedVariantOption?.discount}
          {selectedVariantOption?.discountType === "Percent" ? "%" : "TK"}
        </p>

        <p className="text-gray-500 ">{subtitle}</p>
        <hr />

        <div className="flex items-center space-x-12">
          <div className="space-y-3">
            <p className="text-gray-500 font-medium">Quantity</p>
            <div className="flex items-center space-x-5">
              <Button
                onClick={handleDecrement}
                className={` rounded-full ${
                  count > 1 ? "bg-baseColor " : "bg-gray-500 "
                }`}
              >
                -
              </Button>
              <p className="font-bold">{count}</p>
              <Button onClick={handleIncrement} className="rounded-full">
                +
              </Button>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-gray-500 font-medium">Size</p>
            <div className="flex items-center gap-2">
              {selectedPriceOption?.variants?.map(
                (variant: any, index: number) => (
                  <div
                    onClick={() => variantsHandler(variant)}
                    key={index}
                    className={`border px-4 py-2 rounded-xl cursor-pointer ${
                      selectedVariantOption?.id === variant.id &&
                      "border-baseColor"
                    }`}
                  >
                    {variant.size}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex space-x-7  py-2">
          <div className="space-y-3 text-gray-500 font-semibold">
            <p>Color </p>
            <p>Category </p>
            <p>Stock </p>
            <p>Code </p>
          </div>
          <div className="flex space-x-4 ">
            <div className="space-y-3">
              <p> :</p>
              <p> :</p>
              <p> :</p>
              <p> :</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                {priceOptions?.map((priceOption: any, index: number) => (
                  <div
                    key={index}
                    onClick={() => priceOptionHandler(priceOption)}
                    className={`w-6 h-6 rounded-full cursor-pointer ${
                      selectedPriceOption === priceOption
                        ? "border-4 border-gray-300"
                        : "border border-gray-300"
                    }`}
                    style={{
                      backgroundColor: priceOption?.color
                        ? priceOption.color.toLowerCase()
                        : "white",
                    }}
                  ></div>
                ))}
              </div>
              <p>{subCategory?.name}</p>
              <p className="text-baseColor">
                {selectedVariantOption?.stock || "Out of Stock"}
              </p>
              <p>{sku}</p>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-3">
            <Button onClick={() => handleAddToCartItem()}>Add To Cart</Button>
            <WishListButton
              wishlist={wishlist}
              productId={productDetails?.id}
            />
          </div>
          <div>
            <div className="flex items-center space-x-4 ">
              <span>Share :</span>
              <FaceBookIcon />
              <TwiteerIcon />
              <InstragramIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
