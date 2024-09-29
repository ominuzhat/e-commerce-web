"use server";
import { TRegistration } from "@/app/(auth)/registration/page";
import axiosInstance from "@/lib/AxiosInstance";
import { cookies, headers } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { TLogin } from "@/app/(auth)/login/page";
import axios from "axios";
import envConfig from "@/lib/config/envConfig";

export const registerUser = async (data: TRegistration) => {
  try {
    const res = await axiosInstance.post("/auth/register", data);
    return res?.data;
  } catch (error: any) {
    throw new Error(`Register user: ${error?.response?.data?.error?.message}`);
  }
};

export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("next-auth.session-token");
};

export const LoginUser = async (data: TLogin) => {
  try {
    const res = await axiosInstance.post("/auth/login", data);
    if (res?.data?.data?.access_token) {
      cookies().set("accessToken", res?.data?.data?.access_token);
    }
    return res?.data;
  } catch (error: any) {
    throw new Error(`error Login ${error?.response?.data?.error?.message}`);
  }
};

export const getCurrentUser = async () => {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get("accessToken")?.value;

  try {
    const res = await axios.get(`${envConfig.baseApi}/user/me`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return res?.data;
  } catch (error: any) {
    if (error?.response?.status === 401) {
      console.log("Unauthorized access - redirecting to login");
      return null;
    }
    console.log("Error fetching current user:", error?.response?.data);
    throw new Error(
      `Error fetching current user: ${
        error?.response?.data?.error?.message || "Unknown error"
      }`
    );
  }
};

// export const getCurrentUser = async () => {
//   const cookiesStore = cookies();
//   const accessToken = cookiesStore.get("accessToken")?.value;
//   if (!accessToken) {
//     throw new Error("No access token found. Please log in.");
//   }

//   try {
//     const res = await axios.get(`${envConfig.baseApi}/user/me`, {
//       headers: { Authorization: `Bearer ${accessToken}` },
//     });
//     return res?.data;
//   } catch (error: any) {
//     console.log(error?.response?.data);
//     throw new Error(
//       `Error Current User ${error?.response?.data?.error?.message}`
//     );
//   }
// };
// export const getCurrentUser = async () => {
//   // const accessToken = cookies().get("accessToken")?.value;
//   const accessToken = cookies().get("accessToken")?.value;

//   // const googleToken = cookies().get("next-auth.session-token");
//   // console.log(accessToken, "get user");
//   let decodedToken = null;

//   console.log(accessToken);

//   if (accessToken) {
//     decodedToken = await jwtDecode(accessToken);

//     // console.log("decodedToken", decodedToken);

//     return {
//       // id: decodedToken.id,
//       // name: decodedToken.name,
//       email: decodedToken.data?.registered_user,
//     };
//   }
// };
