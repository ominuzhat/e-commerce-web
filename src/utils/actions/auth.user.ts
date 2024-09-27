"use server";
import { TRegistration } from "@/app/(auth)/registration/page";
import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { TLogin } from "@/app/(auth)/login/page";

export const registerUser = async (data: TRegistration) => {
  try {
    const res = await axiosInstance.post("/auth/register", data);
    return res?.data;
  } catch (error: any) {
    console.log(error, "eeee");
    throw new Error(error);
  }
};

export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("next-auth.session-token");
  localStorage.deleteItem("access_token");
};

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

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  // const googleToken = cookies().get("next-auth.session-token");
  // console.log(accessToken, "get user");
  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    // console.log("decodedToken", decodedToken);

    return {
      // id: decodedToken.id,
      // name: decodedToken.name,
      email: decodedToken.data?.registered_user,
    };
  }
};
