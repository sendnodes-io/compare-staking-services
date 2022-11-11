import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Table from "../components/Table";
import useCalculateNodeRunnerData from "../hooks/useCalculateNodeRunnerData";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Compare Pocket Network Staking Services</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Table />
      </main>

      <footer className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Content goes here */}
      </footer>
    </div>
  );
};

export default Home;
