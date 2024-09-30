"use server";
import axiosInstance from "@/lib/AxiosInstance";

export const addToCart = async (data: any) => {
  try {
    const res = await axiosInstance.post("/cart", data);
    return res?.data;
  } catch (error: any) {
    throw new Error(
      `Add to Cart Error : ${error?.response?.data?.error?.message}`
    );
  }
};

export const addWishlist = async (data: any) => {
  try {
    const res = await axiosInstance.post("/wishlist", data);
    return res?.data;
  } catch (error: any) {
    throw new Error(
      `Add to Wishlist Error : ${error?.response?.data?.error?.message}`
    );
  }
};
