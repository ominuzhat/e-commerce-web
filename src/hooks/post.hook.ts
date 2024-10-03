import {
  addToCart,
  addWishlist,
  removeToCart,
} from "@/utils/actions/post/post.action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "./use-toast";

export const useAddToCart = () => {
  return useMutation({
    mutationKey: ["ADD_TO_CART"],
    mutationFn: async (data: any) => await addToCart(data),
    onSuccess: (data) => {
      toast({
        title: ` ${data?.data?.items[0]?.variant?.priceOption?.product?.title}!`,
        description: "Product added successfully",
        // action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
    },
    onError: (data) => {
      toast({
        title: "Product added Failed",
        description: data?.message || "An unknown error occurred.",
      });
    },
  });
};

export const useRemoveToCart = () => {
  return useMutation({
    mutationKey: ["REMOVE_TO_CART"],
    mutationFn: async (data: any) => await removeToCart(data),
    onSuccess: (data) => {
      console.log(data);

      toast({
        title: ` ${data?.data?.items[0]?.variant?.priceOption?.product?.title}!`,
        description: "Product Remove successfully",
      });
    },
    onError: (data) => {
      console.log(data);

      toast({
        title: "Product remove Failed",
        description: data?.message || "An unknown error occurred.",
      });
    },
  });
};

export const useAddWishlist = () => {
  return useMutation({
    mutationKey: ["ADD_TO_WISHLIST"],
    mutationFn: async (data: any) => await addWishlist(data),
    onSuccess: (response) => {
      const status = response?.status;
      const userName = response?.data?.data?.user?.firstName;
      let message =
        status === 201
          ? "Product added to Wishlist successfully"
          : "Product removed from Wishlist successfully";

      toast({
        title: `Hi, ${userName}!`,
        description: message,
        // action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Operation Failed",
        description:
          error?.response?.data?.message || "An unknown error occurred.",
      });
    },
  });
};
