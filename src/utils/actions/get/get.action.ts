"use server";
import axiosInstance from "@/lib/AxiosInstance";

export const getSingleWishList = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/wishlist/${id}`);

    console.log("sing", response);

    return response.data; // Return only the data from the Axios response
  } catch (error: any) {
    console.log(error.response?.data?.error?.message);
    throw new Error(
      error.response?.data?.error?.message || "Failed to fetch wishlist item"
    );
  }
};

export const getWishList = async () => {
  try {
    const response = await axiosInstance.get(`/wishlist`);
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};
