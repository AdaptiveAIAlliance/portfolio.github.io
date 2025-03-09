import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "../configs/profle_data";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import Header from "@/components/header";
import ThreeFiberScene from "@/components/threefiber_example";
import { StoreProvider } from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profile.name}'s Developer Portfolio`,
  description: `${profile.description}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en" suppressHydrationWarning>
        <head />

        <body className={inter.className + " bg-neutral-900 "}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
