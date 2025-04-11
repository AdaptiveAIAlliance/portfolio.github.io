import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "../configs/profle_data";
import { ThemeProvider, useTheme } from "next-themes";

import Header from "@/components/HeaderBar";
import ThreeFiberScene from "@/components/ThreefiberExample";
import Head from "next/head";
import { assetPathResolver } from "@/utils/utils";
import { useEffect, useRef } from "react";

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
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={assetPathResolver("/apple-touch-icon.png")}
        />
        {/* <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/layout/favicon/favicon-32x32.png"
        /> */}
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={assetPathResolver("/favicon-96x96.png")}
        />
        <link rel="shortcut icon" href={assetPathResolver("/favicon.ico")} />

        <link rel="manifest" href={assetPathResolver("/site.webmanifest")} />
        <link
          rel="mask-icon"
          href={assetPathResolver("/favicon.ico")}
          color="#000000"
        />
      </Head>
      <ThemeProvider attribute="class">
        <LayoutBody>{children}</LayoutBody>
      </ThemeProvider>
    </>
  );
}

const LayoutBody = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div id="root" ref={containerRef}>
        <Header />
        {children}
        <ThreeFiberScene pref={containerRef} />
      </div>
    </>
  );
};
