"use server";
import axiosInstance from "@/lib/AxiosInstance";
import envConfig from "@/lib/config/envConfig";
import { cookies } from "next/headers";

export const getSingleWishList = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/wishlist/${id}`);

    return response.data;
  } catch (error: any) {
    console.log(error.response?.data?.error?.message);
    throw new Error(
      error.response?.data?.error?.message || "Failed to fetch wishlist item"
    );
  }
};

export const getWishList = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const fetchOptions = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    next: {
      tags: ["wishlist"],
    },
  };
  try {
    const response = await fetch(`${envConfig.baseApi}/wishlist`, fetchOptions);

    if (!response.ok) {
      throw new Error("Failed to fetch wishlist");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message || "An unknown error occurred");
  }
};

export const getCartList = async (cartId: string | null) => {
  try {
    const response = await axiosInstance.get(`/cart/${cartId}`);
    return response?.data;
  } catch (error: any) {
    console.log(error.response?.data?.error?.message);
    throw new Error(
      error.response?.data?.error?.message || "Failed to fetch cart item"
    );
  }
};
