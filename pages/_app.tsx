import Layout from "@/components/Layout";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import EditModal from "@/components/modals/EditModal";
import ImageModal from "@/components/modals/ImageModal";
import CreditModal from "@/components/modals/CreditModal";
import { TonConnectUIProvider } from '@tonconnect/ui-react';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <TonConnectUIProvider manifestUrl="https://localhost:3000/tonconnect-manifest.json">
      <Toaster/>
      <CreditModal/>
      <EditModal/>
      <ImageModal/>
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </TonConnectUIProvider>
    </SessionProvider>
  );
}
