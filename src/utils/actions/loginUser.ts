"use server";
import { TLogin } from "@/app/(auth)/login/page";
import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";

export const LoginUser = async (data: TLogin) => {
  try {
    const res = await axiosInstance.post("/auth/login", data);
    console.log("res", res?.data);

    if (res?.data?.success) {
      localStorage.setItem("accessToken", res?.data?.accessToken);
      cookies().set("accessToken", res?.data?.accessToken);
    }
    return res?.data;
  } catch (error: any) {
    console.log(error, "eeee");
    throw new Error(error);
  }
};

// "use server";
// import { TLogin } from "@/app/(auth)/login/page";
// import envConfig from "@/lib/config/envConfig";

// export const LoginUser = async (data: TLogin) => {
//   const res = await fetch(`${envConfig.baseApi}/login`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(data),
//     cache: "no-cache",
//   });

//   const userInfo = await res.json();

//   return userInfo;
// };
