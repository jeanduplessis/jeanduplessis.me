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
          
          <link rel="shortcut icon" href="/jean-du-plessis-profile-large@2x.webp" />

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
            content="https://jeanduplessis.me/jean-du-plessis-profile-large@2x.webp"
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
