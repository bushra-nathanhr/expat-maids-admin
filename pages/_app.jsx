import * as React from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "../styles/global.scss";
import Script from "next/script";
import { useRouter } from "next/router";
import { gtmVirtualPageView } from "../utils/gtm";

export default function MyApp(props) {
  const { Component, ...pageProps } = props;

  const router = useRouter();

  React.useEffect(() => {
    const mainDataLayer = {
      pageTypeName: pageProps.page || null,
      url: router.pathname,
    };

    gtmVirtualPageView(mainDataLayer);
  }, [pageProps]);

  return (
    <main>
      <DefaultSeo {...SEO} />
      <Head>
        <meta
          name="google-site-verification"
          content="HnTydD_wVgUWsRWlkbQ-7SZ7dAw4WgsCzxFtEnw0q-I"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W65SVHS');
          `}
      </Script>
      <Component {...pageProps} />
    </main>
  );
}
