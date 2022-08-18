import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import theme from "theme";
import { ChakraProvider } from "@chakra-ui/react";
import fetchJson from "lib/fetchJson";
import Layout from "components/Layout";
import { AuthProvider } from "context/auth";

// Inter
import "@fontsource/inter";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        revalidateOnFocus: false,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </AuthProvider>
    </SWRConfig>
  );
}

export default MyApp;
