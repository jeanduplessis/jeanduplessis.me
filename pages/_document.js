import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&family=Roboto+Slab:wght@400;600&family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />

          <meta
            name="application-name"
            content="Jean du Plessis' personal website"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Jean du Plessis" />
          <meta
            name="description"
            content="Jean du Plessis' personal website"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/touch-icon-ipad.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/touch-icon-iphone-retina.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/touch-icon-ipad-retina.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/jean-du-plessis-profile@2x.webp" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://jeanduplessis.me" />
          <meta name="twitter:title" content="Jean du Plessis" />
          <meta
            name="twitter:description"
            content="Jean du Plessis's personal website"
          />
          <meta
            name="twitter:image"
            content="https://jeanduplessis.com/icons/android-chrome-192x192.png"
          />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Jean du Plessis" />
          <meta
            property="og:description"
            content="Jean du Plessis' personal website"
          />
          <meta property="og:site_name" content="Jean du Plessis" />
          <meta property="og:url" content="https://jeanduplessis.me" />
          <meta
            property="og:image"
            content="https://jeanduplessis.com/icons/apple-touch-icon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
