// pages/_app.js
import "../app/globals.css"
import Layout from "@/components/layout";
import Loader from "@/components/Loader"; 
import { useRouter } from "next/router";
import { useState, useEffect} from "react";

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        // const handleStart = () => setLoading(true);
        // const handleStop = () => setLoading(false);
    
        // router.events.on("routeChangeStart", handleStart);
        // router.events.on("routeChangeComplete", handleStop);
        // router.events.on("routeChangeError", handleStop);
    
        // return () => {
        //   router.events.off("routeChangeStart", handleStart);
        //   router.events.off("routeChangeComplete", handleStop);
        //   router.events.off("routeChangeError", handleStop);
        // };
      }, [router]);
  return (
    <Layout>
        {loading && <Loader />}
      <Component {...pageProps} />
    </Layout>
  );
}
