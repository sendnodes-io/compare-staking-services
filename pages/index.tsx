import type { NextPage } from "next";
import Head from "next/head";
import Description from "../components/Description";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "../components/Table";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>
          Compare Staking Services | Pocket Network Staking Services
        </title>
        <link rel="icon" href="/logoart3x.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="w-full mx-auto">
        <Header />

        <div className="">
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
