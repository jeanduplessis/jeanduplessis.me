import Head from "next/head";
import Header from "../components/header";
import About from "../components/about";
import Readme from "../components/readme";
import Career from "../components/career";
import Contact from "../components/contact";
import Footer from "../components/footer";
import ContentSection from "../components/content-section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jean du Plessis | Engineering Leader</title>
        <meta
          name="description"
          content="Read all about Jean du Plessis's personal life, management style and preferences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jean-du-plessis-profile@2x.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&family=Roboto+Slab:wght@400;600&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <article
        id="main"
        className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <h1 className="text-4xl font-semibold mb-4 hidden md:block">
          <pre className="text-gray-800">
            humans.
            <span className="text-purple-700">find</span>(
            <span className="text-green-700">"Jean du Plessis"</span>
            ).
            <span className="text-purple-700">print</span>
            ()
          </pre>
        </h1>

        <h1 className="font-serif text-4xl font-semibold mb-4 md:hidden">
          Hey, Jean here 👋
        </h1>

        <ContentSection>
          <About />
        </ContentSection>

        <ContentSection>
          <Readme />
        </ContentSection>

        <ContentSection>
          <Career />
        </ContentSection>

        <ContentSection>
          <Contact />
        </ContentSection>
      </article>

      <Footer />
    </>
  );
}
