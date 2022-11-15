import type { NextPage } from "next";
import Head from "next/head";
import Description from "../components/Description";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "../components/Table";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex-none flex justify-end">
          <picture>
            <source srcSet="bg-light.avif" type="image/avif" />
            <img
              src="bg-light.png"
              alt=""
              className="w-[71.75rem] flex-none max-w-none dark:hidden"
              decoding="async"
            />
          </picture>
          <picture>
            <source srcSet="bg-dark.png" type="image/avif" />
            <img
              src="bg-dark.png"
              alt=""
              className="w-[90rem] flex-none max-w-none hidden dark:block"
              decoding="async"
            />
          </picture>
        </div>
      </div>

      <Head>
        <title>Compare Pocket Network Staking Services</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Table />

        <div className="mt-4 md:mt-8 lg:mt-12">
          <Description />
        </div>
      </main>

      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
