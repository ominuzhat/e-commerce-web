"use server";
import { TRegistration } from "@/app/(auth)/registration/page";
import axiosInstance from "@/lib/AxiosInstance";
import envConfig from "@/lib/config/envConfig";

export const registerUser = async (data: TRegistration) => {
  try {
    const res = await axiosInstance.post("/registration", data);
  } catch (error: any) {
    throw new Error(error);
  }

  // const res = await fetch(`${envConfig.baseApi}/register`, {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  //   cache: "no-cache",
  // });

  // const userInfo = await res.json();

  // return userInfo;
};
