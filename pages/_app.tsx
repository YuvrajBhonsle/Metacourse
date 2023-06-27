import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import reducer, {initialState} from "../reducer";
import {StateProvider} from "../StateProvider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </StateProvider>
    </ChakraProvider>
  );
}
