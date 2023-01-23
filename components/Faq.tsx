import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Icon } from "@iconify/react";

const faqs = [
  {
    question: "Why did you make this?",
    answer: (
      <>
        <p>
          The answer is simple really. We wanted to make a list of all the
          Pocket Network staking services. To provide users with transparency
          and a way to compare the various staking services in a data-driven
          way.
        </p>
      </>
    ),
  },
  {
    question: "Who made this?",
    answer: (
      <>
        <p>The same people behind SendNodes and SendWallet. You can review the source code here:</p>
        <ul className="list list-disc list-inside">
          <li><a target={"_blank"} rel="nopenner noreferrer"
              href="https://github.com/sendnodes-io/compare-staking-services">Compare Staking Services</a></li>
          <li><a target={"_blank"} rel="nopenner noreferrer"
              href="https://github.com/sendnodes-io/performance-monitoring">Performance Metrics</a></li>
        </ul>
      </>
    ),
  },
  {
    question: "How do I stake with Pocket Network?",
    answer: (
      <>
        <p className="my-2">
          POKT staking is a process that allows you to earn rewards for serving
          relays on the Pocket Network. You can either stake your POKT on your
          own node or with a staking service provider of your choice.
        </p>
        <div className="rounded-md bg-yellow-50 p-4 my-2">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3  max-w-full">
              <h3 className="text-sm font-medium text-yellow-800">
                This is not financial advice
              </h3>
              <div className="mt-2 text-sm text-yellow-700 ">
                This list is not exhaustive and this is not financial advice. It
                is your responsibility to do your own research and due diligence
                before engaging in staking.
              </div>
            </div>
          </div>
        </div>
        <p className="my-2">
          It is important to understand the various features of each staking
          service provider before engaging in staking. The following is a list
          of the most important features to consider when choosing a staking
          service provider:
        </p>
        <ul className="list-disc list-inside my-2">
          <li>Net Staking Rewards</li>
          <li>Unstake Periods</li>
          <li>Minimum Stake Amount</li>
          <li>Custodial vs Non-custodial</li>
          <li>Ease-of-staking and KYC</li>
          <li>Insurance</li>
        </ul>
        <p className="my-2">
          Once you have decided on a staking service provider, you can click
          their logo to be taken to their website. From there, you can follow
          their instructions to stake.
        </p>
      </>
    ),
  },
  {
    question: "Whats the difference between gross and net rewards?",
    answer: (
      <>
        <p>
          Gross rewards are the rewards that the staking service provider earns
          from their nodes servicing relays before fees.
        </p>
        <p>
          Net rewards are the rewards that the staking service provider actually
          pays out to the staker per tranche after fees.
        </p>
      </>
    ),
  },
  {
    question: "Why are some staking services not listed?",
    answer: (
      <>
        <p>
          We included the top staking services that we could find. If you think
          a staking service should be included, please reach out to us on
          Telegram.
        </p>
      </>
    ),
  }
  // More questions...
];

export default function Faq() {
  return (
    <div className="bg-[#ECEBE8] notdark:bg-zinc-900 max-w-7xl mx-auto">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 relative ">
          <div className="">
            <h2 className="text-3xl font-bold tracking-tight ">
              Frequently asked questions
            </h2>
            <div className="mt-4 text-lg  ">
              <p>
                Information is incorrect? Can’t find the answer you’re looking
                for? Reach out to our{" "}
                <a
                  href={process.env.NEXT_PUBLIC_TELEGRAM_URL!}
                  className="font-medium text-yellow-500 hover:text-yellow-600"
                >
                  customer support
                </a>{" "}
                team below.
              </p>
              <div className="flex gap-4 justify-center mt-4">
                <a
                  href={process.env.NEXT_PUBLIC_TWITTER_URL!}
                  className="btn btn-circle btn-ghost btn-active"
                  target={"_blank"}
                >
                  <span className="sr-only">Twitter SendNodes</span>
                  <Icon icon="mdi:twitter" width={32} height={32} />
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_DISCORD_URL!}
                  className="btn btn-circle btn-ghost btn-active"
                  target={"_blank"}
                >
                  <span className="sr-only">Discord SendNodes</span>
                  <Icon icon="akar-icons:discord-fill" width={32} height={32} />
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_TELEGRAM_URL!}
                  className="btn btn-circle btn-ghost btn-active"
                  target={"_blank"}
                >
                  <span className="sr-only">
                    Telegram SendWallet by SendNodes
                  </span>
                  <Icon icon="bxl:telegram" width={32} height={32} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-2 lg:mt-0">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-medium leading-6">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
