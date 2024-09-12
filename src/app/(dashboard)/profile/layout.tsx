// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import BreadCrumb from "@/common/BreadCrumb";
import ProfileNavber from "./ProfileNavber";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { useEffect, useState } from "react";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Profile | Eco Shop",
  description: "Profile | Eco Shop",
};

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionData = await getServerSession(authOptions);
  // const [localData, setLocalData] = useState<string | null>(null);

  // console.log("a", localData);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     // Access localStorage here
  //     const storedToken = localStorage.getItem("access-token");
  //     setLocalData(storedToken);
  //   }
  // }, []);

  return (
    <>
      <BreadCrumb />
      <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-3 gap-5 my-10 space-y-5 lg:space-y-0 px-2">
        <ProfileNavber session={sessionData} />
        <div className="lg:col-span-2">{children}</div>
      </div>
    </>
  );
}
