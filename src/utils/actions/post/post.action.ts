"use server";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const addToCart = async (data: any) => {
  try {
    const res = await axiosInstance.post("/cart", data);
    revalidateTag("addTocart");
    return res?.data;
  } catch (error: any) {
    throw new Error(
      `Add to Cart Error : ${error?.response?.data?.error?.message}`
    );
  }
};

export const removeToCart = async (data: any) => {
  try {
    const res = await axiosInstance.delete("/cart", data);

    console.log(res);

    revalidateTag("addTocart");
    return res?.data;
  } catch (error: any) {
    console.log(error?.response?.data?.error?.message);
    throw new Error(
      `Add to Cart Error : ${error?.response?.data?.error?.message}`
    );
  }
};

export const addWishlist = async (data: any) => {
  try {
    const res = await axiosInstance.post("/wishlist", data);
    revalidateTag("wishlist");
    return { status: res.status, data: res.data };
  } catch (error: any) {
    throw new Error(
      `Add to Wishlist Error: ${error?.response?.data?.error?.message}`
    );
  }
};
