import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { AOSInit } from "@/lib/aos";
import BreadCrumb from "@/common/BreadCrumb";
import ProgressBarComponent from "@/lib/PrograssBar";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Geo Mart",
  description: "Geo Mart",
};

export default function RootLayout({
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
        <AOSInit />
        {children}
        <ProgressBarComponent />
      </body>
    </html>
  );
}
