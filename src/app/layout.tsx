import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { AOSInit } from "@/lib/aos";
import ProgressBarComponent from "@/lib/PrograssBar";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import TanStackProviders from "@/providers/TanStackProviders";
import UserProvider from "@/providers/user.provider";
import { WebsiteInfoProvider } from "@/providers/website.provider";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Eco Shop",
  description: "Eco Shop",
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
        <WebsiteInfoProvider>
          <UserProvider>
            <TanStackProviders>
              <AuthProvider>
                <AOSInit />
                <Toaster />
                {children}
                <ProgressBarComponent />
              </AuthProvider>
            </TanStackProviders>
          </UserProvider>
        </WebsiteInfoProvider>
      </body>
    </html>
  );
}
