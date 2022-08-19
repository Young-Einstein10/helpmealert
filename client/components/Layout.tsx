import React, { ReactNode } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Fragment } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const IMAGE_URL =
  "https://res.cloudinary.com/young-einstein/image/upload/v1660697015/android-chrome-512x512_ivkipa.png";

const Layout = ({
  title = "Homepage",
  children,
}: {
  title?: string;
  children: ReactNode;
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="A Safety Emergency BOT you can use on the Twitter Platform."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link href="/favicons/favicon.ico" rel="shortcut icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://helpmealert.vercel.app" />
        <meta property="og:title" content="Safety Emergency BOT" />
        <meta
          property="og:description"
          content="A Safety Emergency BOT you can use on the Twitter Platform."
        />
        <meta property="og:image" content={IMAGE_URL} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://helpmealert.vercel.app" />
        <meta property="twitter:title" content="Safety Emergency BOT" />
        <meta
          property="twitter:description"
          content="A Safety Emergency BOT you can use on the Twitter Platform."
        />
        <meta property="twitter:image" content={IMAGE_URL} />
      </Head>

      <Box as="main">
        <Navbar />
        {children}
        <Footer />
      </Box>
    </Fragment>
  );
};

export default Layout;
