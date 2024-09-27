import axiosInstance from "@/lib/AxiosInstance";
import envConfig from "@/lib/config/envConfig";

export const getProductList = async () => {
  try {
    const response = await axiosInstance.get(`/product?pagination=true`);
    return response?.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
    // return null;
  }
};

// export const getProductList = async () => {
//   const response = await fetch(`${envConfig.baseApi}/product?pagination=true`);
//   const data = await response.json();
//   return data;
// };

// export const getProductFDetails = async (id: any) => {
//   const response = await fetch(`${envConfig.baseApi}/product/${id}`);
//   const data = await response.json();
//   return data;
// };

export const getProductFDetails = async (id: any) => {
  try {
    const { data } = await axiosInstance.get(`/product/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
