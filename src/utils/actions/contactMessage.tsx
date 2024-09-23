"use server";
import { TContactMessage } from "@/app/contact/ContactForm";
import axiosInstance from "@/lib/AxiosInstance";

export const contactMessage = async (data: TContactMessage) => {
  try {
    const res = await axiosInstance.post("/core/contact-us", data);
    return res?.data;
  } catch (error: any) {
    // console.log(error, "error");
    throw new Error(error);
  }
};
