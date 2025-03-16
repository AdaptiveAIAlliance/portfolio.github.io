import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "../configs/profle_data";
import { ThemeProvider } from "next-themes";

import Header from "@/components/HeaderBar";
import ThreeFiberScene from "@/components/ThreefiberExample";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: `${profile.name}'s Developer Portfolio`,
  description: `${profile.description}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" suppressHydrationWarning>
    //   <Head>
    //     <link rel="icon" href="/favicon.ico" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1" />
    //     <meta charSet="UTF-8" />
    //     <title>{metadata.title as string}</title>
    //   </Head>
    //
    // <body className={inter.className + " bg-neutral-900 "}>

    <ThemeProvider attribute="class">
      <ThreeFiberScene />
      <Header />
      {children}
    </ThemeProvider>
    // </body>
    // </html>
  );
}
