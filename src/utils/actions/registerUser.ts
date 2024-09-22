"use server";
import { TRegistration } from "@/app/(auth)/registration/page";
import axiosInstance from "@/lib/AxiosInstance";
import axios from "axios"; // Import axios to check Axios errors

export const registerUser = async (data: TRegistration) => {
  try {
    const res = await axiosInstance.post("/registration", data);
    console.log("res", res?.data);
    // return res?.data;
  } catch (error: any) {
    console.log(error, "eeee");
    // throw new Error("An unknown error occurred");
  }
};

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
// };
