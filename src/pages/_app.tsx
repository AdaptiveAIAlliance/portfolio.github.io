import "./globals.css";
import type { AppProps } from "next/app";
import RootLayout from "./layout";
import Loading from "./loading";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { StoreProvider } from "../components/StoreProvider/StoreProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const hasMounted: MutableRefObject<boolean> = useRef(false);
  useEffect(() => {
    if (!hasMounted.current) {
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
      hasMounted.current = true;
    }
  }, [router.events]);
  return (
    <StoreProvider>
      <RootLayout>
        {loading ? <Loading /> : <Component {...pageProps} />}
      </RootLayout>
    </StoreProvider>
  );
}
