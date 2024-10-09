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
import { useUser } from "@/providers/user.provider";

const CommonAddToCartButton = ({ data }: any) => {
  const { cartlist, setIsCartLoading }: any = useUser();

  const CartID = cartlist?.data?.items?.find(
    (p: any) => p?.variant?.priceOption?.product?.id === data?.id
  );

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
    setIsCartLoading(true);
    const addToCart = {
      variant: data?.priceOptions?.[0]?.variants[0]?.id,
      quantity: 1,
      cartId: cartId || null,
    };

    handleAddToCart(addToCart, {
      onSuccess: (data) => {
        setIsCartLoading(false);
      },
      onError: () => {
        setIsCartLoading(false);
      },
    });
  };
  return (
    <div>
      <div className="absolute bottom-8 right-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger onClick={() => handleAddToCartItem(data)}>
              <FontAwesomeIcon
                icon={faBagShopping}
                className={` ${
                  CartID
                    ? "bg-baseColor"
                    : "bg-secondaryColor hover:bg-baseColor"
                } w-4 h-4 text-white rounded-full p-2 cursor-pointer duration-300 hover:duration-300`}
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
