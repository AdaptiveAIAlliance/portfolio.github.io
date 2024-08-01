import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "../configs/profle_data";
import { ThemeProvider } from "next-themes";

import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <head />

      <body className={inter.className + " bg-slate-200 "}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
