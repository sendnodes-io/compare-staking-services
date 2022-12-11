import type { NextPage } from "next";
import Head from "next/head";
import Description from "../components/Description";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center relative">
      <Head>
        <title>
          Compare Staking Services | Pocket Network Staking Services
        </title>
        <link rel="icon" href="/favicon.svg" />
        <meta
          property="og:title"
          content="Compare Staking Services | Pocket Network Staking Services"
        />
        <meta
          property="og:description"
          content="A comparison of Pocket Network staking services. This list breaks down the services by their staking rewards, staking fees, and staking minimums."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://comparestakingservices.com/" />
        <meta
          property="og:image"
          content="https://comparestakingservices.com/og_image.jpg"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="w-full mx-auto">
        <Header />

        <div className="">
          <Description />
        </div>
      </main>

      <div className="fixed z-50 bottom-4 right-2"></div>

      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
