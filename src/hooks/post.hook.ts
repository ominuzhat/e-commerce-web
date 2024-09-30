import { addToCart, addWishlist } from "@/utils/actions/post/post.action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "./use-toast";

export const useAddToCart = () => {
  return useMutation({
    mutationKey: ["ADD_TO_CART"],
    mutationFn: async (data: any) => await addToCart(data),
    onSuccess: (data) => {
      toast({
        title: `Hi, ${data?.data?.title}!`,
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
export const useAddWishlist = () => {
  return useMutation({
    mutationKey: ["ADD_TO_WISHLIST"],
    mutationFn: async (data: any) => await addWishlist(data),
    onSuccess: (data) => {
      toast({
        title: `Hi, ${data?.data?.user?.firstName}!`,
        description: "Product added to Wishlist successfully",
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
