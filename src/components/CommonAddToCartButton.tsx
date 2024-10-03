"use client";
import { useAddToCart } from "@/hooks/post.hook";
import { useEffect, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useGetCartlist } from "@/hooks/get.hook";
import { useUser } from "@/providers/user.provider";

const CommonAddToCartButton = ({ data }: any) => {
  const { setIsCartLoading }: any = useUser();
  const {
    mutate: handleAddToCart,
    data: cartData,
    isPending,
    isSuccess,
  } = useAddToCart();
  const [cartId, setCartId] = useState<string | null>(null);

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

  const handleAddToCartItem = (data: any) => {
    const addToCart = {
      variant: data?.priceOptions?.[0]?.variants[0]?.id,
      quantity: 1,
      cartId: cartId || null,
    };
    setIsCartLoading(true);
    handleAddToCart(addToCart);
  };
  return (
    <div>
      <div className="absolute bottom-8 right-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger onClick={() => handleAddToCartItem(data)}>
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
  );
};

export default CommonAddToCartButton;
