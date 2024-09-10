"use server";
import { TRegistration } from "@/app/(auth)/registration/page";
import { baseUrl } from "./../constant";

export const registerUser = async (data: TRegistration) => {
  const res = await fetch(`${baseUrl}/register`, {
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
