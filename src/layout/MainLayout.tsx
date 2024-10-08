import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopHeader from "@/shared/Navbar/TopHeader";
import Header from "@/shared/Navbar/Header";
import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/Footer/Footer";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Eco Shop",
  description: "Eco Shop",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopHeader />
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
