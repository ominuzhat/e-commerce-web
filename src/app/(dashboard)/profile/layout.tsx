import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import BreadCrumb from "@/common/BreadCrumb";
import ProfileNavber from "./ProfileNavber";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Profile | Geo Mart",
  description: "Profile | Geo Mart",
};

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionData = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <BreadCrumb />
        <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-3 gap-5 my-10 space-y-5 lg:space-y-0 px-2">
          <ProfileNavber session={sessionData} />
          <div className="lg:col-span-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
