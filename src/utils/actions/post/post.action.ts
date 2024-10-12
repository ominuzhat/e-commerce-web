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

export const updateToCart = async (data: any) => {
  try {
    const res = await axiosInstance.patch("/cart", data);
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
  console.log(data);

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

export const addCoupon = async (data: any) => {
  try {
    const res = await axiosInstance.post("/coupon/apply", data);

    return { status: res.status, data: res.data };
  } catch (error: any) {
    throw new Error(
      `Add to Wishlist Error: ${error?.response?.data?.error?.message}`
    );
  }
};
export const AddOrder = async (data: any) => {
  try {
    const res = await axiosInstance.post("/payment/bkash/create", data);

    return { status: res.status, data: res.data };
  } catch (error: any) {
    throw new Error(
      `Add to Wishlist Error: ${error?.response?.data?.error?.message}`
    );
  }
};
