"use server";
import { TLogin } from "@/app/(auth)/login/page";
import envConfig from "@/lib/config/envConfig";

export const LoginUser = async (data: TLogin) => {
  const res = await fetch(`${envConfig.baseApi}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });

  const userInfo = await res.json();

  return userInfo;
};
