"use server";
import axiosInstance from "@/lib/AxiosInstance";

export const addToCart = async (data: any) => {
  try {
    const res = await axiosInstance.post("/cart", data);
    return res?.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
