"use server";
import axiosInstance from "@/lib/AxiosInstance";
import envConfig from "@/lib/config/envConfig";

export const getProductList = async () => {
  let fetchOptions = {};
  fetchOptions = {
    cache: "no-store",
  };

  try {
    const response = await axiosInstance.get(`/product`, fetchOptions);
    return response?.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
    // return null;
  }
};

// export const getProductList = async () => {
//   let fetchOptions = {};
//   fetchOptions = {
//     cache: "no-store",
//   };

//   const response = await fetch(
//     `${envConfig.baseApi}/product`,
//     fetchOptions
//   );

//   // if (!response.ok) {
//   //   throw new Error(`HTTP error! status: ${response?.status}`);
//   // }
//   const data = await response.json();
//   return data;
// };

export const getProductFDetails = async (id: any) => {
  const response = await fetch(`${envConfig.baseApi}/product/${id}`);
  const data = await response.json();
  return data;
};

// export const getProductFDetails = async (id: any) => {
//   try {
//     const { data } = await axiosInstance.get(`/product/${id}`);
//     return data;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };
