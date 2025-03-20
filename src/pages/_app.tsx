import "./globals.css";
import type { AppProps } from "next/app";
import RootLayout from "./layout";
import Loading from "./loading";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { StoreProvider } from "../components/StoreProvider/StoreProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, []);
  return (
    <StoreProvider>
      <RootLayout>
        {loading ? <Loading /> : <Component {...pageProps} />}
      </RootLayout>
    </StoreProvider>
  );
}
