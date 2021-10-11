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
            <span className="text-green-700">&quot;Jean du Plessis&quot;</span>
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
