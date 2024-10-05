import {
  addCoupon,
  AddOrder,
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
export const useAddCoupon = () => {
  return useMutation({
    mutationKey: ["ADD_COUPON"],
    mutationFn: async (data: any) => await addCoupon(data),
    onSuccess: (response) => {
      const status = response?.status;
      const userName = response?.data?.data?.user?.firstName;
      let message =
        status === 201
          ? "Product added to Coupon successfully"
          : "Product removed from Coupon successfully";

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
export const useAddOrder = () => {
  return useMutation({
    mutationKey: ["ADD_ORDER"],
    mutationFn: async (data: any) => await AddOrder(data),
    onSuccess: (data) => {
      console.log(data);

      toast({
        title: `Hi, ${data?.data?.data?.customer?.user?.firstName}!`,
        description: "Order Confirm successfully",
        // action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
    },
    onError: (data) => {
      console.log(data);

      toast({
        title: "Order Confirm  Failed",
        description: data?.message || "An unknown error occurred.",
      });
    },
  });
};
