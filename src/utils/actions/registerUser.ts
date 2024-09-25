"use server";
import { TRegistration } from "@/app/(auth)/registration/page";
import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

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

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  // const googleToken = cookies().get("next-auth.session-token");

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    console.log("decodedToken", decodedToken);

    return {
      id: decodedToken.id,
      name: decodedToken.name,
      email: decodedToken.email,
    };
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
