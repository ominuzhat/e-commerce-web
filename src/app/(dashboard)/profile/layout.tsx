import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import BreadCrumb from "@/common/BreadCrumb";
import ProfileNavber from "./ProfileNavber";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Profile | Geo Mart",
  description: "Profile | Geo Mart",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <ProfileNavber />
          <div className="lg:col-span-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
