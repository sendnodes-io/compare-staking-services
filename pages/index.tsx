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
            <source srcSet="bg-dark.avif" type="image/avif" />
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
        <title>Compare Node Runners | Pocket Network Staking Services</title>
        <link rel="icon" href="/logoart3x.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Example />

      {/* <Header />

      <main className="w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Table />

        <div className="mt-4 md:mt-8 lg:mt-12">
          <Description />
        </div>
      </main>

      <footer className="w-full">
        <Footer />
      </footer> */}
    </div>
  );
};

/* This example requires Tailwind CSS v3.0+ */
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { Icon } from "@iconify/react";

export function Example() {
  return (
    <div className="isolate ">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="##33FFFF" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div></div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <img
                  src="/logo3x.png"
                  alt="Compare Node Runners"
                  className="mb-8"
                  width={1000}
                  height={342}
                />
                <h1 className="text-4xl font-bold tracking-tight text-center sm:text-4xl text-white">
                  COMING SOON
                </h1>
                <p className="mt-6 text-lg leading-8 text-center">
                  For more info
                  <br />
                  <a
                    href="https://t.me/CompareStakingServices"
                    className="inline-flex items-center rounded-md border border-transparent bg-[#1E91D6] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <Icon icon="bxl:telegram" width={32} height={32} />
                    Join our Telegram
                  </a>
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
