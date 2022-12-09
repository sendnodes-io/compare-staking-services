import useCalculateNodeRunnerData from "../hooks/useCalculateNodeRunnerData";
import {
  ExclamationTriangleIcon,
  ArrowTopRightOnSquareIcon,
  CheckBadgeIcon,
} from "@heroicons/react/20/solid";
import { Feature, features } from "./Header";
import { useState } from "react";
import Modal from "@/components/Modal";
import { Dialog } from "@headlessui/react";
import { NodeParams } from "@/hooks/useNodeRunnerParams";
import QuestionMarkCircleIcon from "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import useFeatureDescriptions from "@/hooks/useFeatureDescriptions";
import usePoktPrice from "@/hooks/usePoktPrice";

export default function Table() {
  const { data, isLoading, error } = useCalculateNodeRunnerData();
  const { data: pocketPrice } = usePoktPrice();

  if (error) {
    return (
      <div className="rounded-md bg-yellow-50 p-8 max-w-xl mx-auto mt-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon
              className="h-5 w-5 text-yellow-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3  max-w-full">
            <h3 className="text-sm font-medium text-yellow-800">
              Something went wrong
            </h3>
            <div className="mt-2 text-sm text-yellow-700 ">
              Sorry about that, something went wrong. Please try again later.
              <br />
              <pre className="opacity-50 max-w-full overflow-x-auto py-4">
                <span>// for the devs</span>
                <br />
                {error?.toString()}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 mt-8">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 notdark:border-white"></div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-0 w-full">
      <div className="mt-8 flex flex-col items-center w-full">
        <div className="-my-2 overflow-x-auto  sm:max-w-full sm:px-8 w-full max-w-[90vw] ">
          <div className="inline-block min-w-full py-2 align-middle px-1">
            <div className="overflow-x-hidden overflow-y-auto shadow ring-1 ring-black ring-opacity-5 rounded-lg max-h-[80vh]">
              <table className="min-w-full divide-y divide-gray-300 relative z-10">
                <thead className="bg-gray-50 notdark:bg-gray-900 sticky top-0 z-10 rounded-t-lg">
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 sm:py-5 pl-4 pr-3 text-left text-sm font-bold "
                    >
                      &nbsp;
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 sm:py-5 pl-4 pr-3 text-left text-sm font-bold "
                    >
                      <span className="ml-12">Name</span>
                    </th>

                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 sm:py-5 pl-4 pr-3 text-center text-sm font-bold text-[#3A9C90] notdark:text-[#3A9C90]"
                    >
                      <span
                        title="Last 24h avg. Net POKT Rewards
                        per 15K POKT Staked"
                      >
                        <b>*</b> Last 24h avg. Net POKT Rewards <br />
                        per 15K POKT Staked
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 sm:py-5 pl-4 pr-3 text-center text-sm font-bold "
                    >
                      <span
                        title="Last 24h avg. Gross POKT Rewards
                        per 15K POKT Staked"
                      >
                        Last 24h avg. Gross POKT Rewards <br />
                        per 15K POKT Staked
                      </span>
                    </th>

                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 sm:py-5 pl-4 pr-3 text-center text-sm font-bold "
                    >
                      Minimum Staking Amount (POKT)
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 sm:py-5 pl-4 pr-3 text-center text-sm font-bold "
                    >
                      Monthly Fee (USD)
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 sm:py-5 pl-4 pr-3 text-center text-sm font-bold "
                    >
                      Commission (POKT) % per Tranche
                    </th>

                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 sm:py-5 pl-4 pr-3 text-center text-sm font-bold "
                    >
                      No KYC
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 sm:py-5 pl-4 pr-3 text-center text-sm font-bold "
                    >
                      Dedicated Infrastructure
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 sm:py-5 pl-4 pr-3 text-center text-sm font-bold "
                    >
                      Insurance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  {data
                    .sort((a, b) => b.net - a.net)
                    .map(({ net, params, stats }, idx) => (
                      <tr
                        key={`tr-${JSON.stringify(params)}`}
                        className="odd:bg-white even:bg-[#FAFAF7] notdark:odd:bg-zinc-800 notdark:even:bg-neutral-900"
                      >
                        <td className="bg-inherit whitespace-nowrap px-3 py-4 text-sm ">
                          <a href={params.url} target="_blank" rel="nofollow">
                            <span className="text-xl font-black inline-block mr-2">
                              <ArrowTopRightOnSquareIcon
                                className="h-5 w-5 text-neutral-400"
                                aria-hidden="true"
                              />
                            </span>
                          </a>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm ">
                          <div className="flex items-center justify-start gap-x-2">
                            <div className="h-full w-12 flex-shrink-0 items-center">
                              {!!params.logo_url && (
                                <div className="h-12 w-12 bg-neutral-500 rounded-full flex justify-center items-center">
                                  <img
                                    className="h-10 w-10 m-auto rounded-full object-center object-contain"
                                    src={params.logo_url}
                                    alt={params.name}
                                  />
                                </div>
                              )}
                            </div>
                            <div className="">
                              <div className="font-medium flex items-center capitalize">
                                {params.name}
                                <VerifiedBadge
                                  verified={params.feature_verified}
                                />
                              </div>
                              <p className="mt-2 flex gap-x-2 items-center">
                                {features
                                  .filter(
                                    (f) =>
                                      ![
                                        "feature_dedicated_infra",
                                        "feature_insurance",
                                      ].includes(f.key)
                                  )
                                  .map(
                                    (feature) =>
                                      feature.key in params &&
                                      !!(params as any)[feature.key] && (
                                        <FeatureItem
                                          feature={feature}
                                          params={params}
                                        />
                                      )
                                  )}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="whitespace-nowrap  text-center px-3 py-4 text-sm ">
                          {net.toFixed(2).toLocaleString() ?? "N/A"}
                        </td>
                        <td className="whitespace-nowrap text-center px-3 py-4 text-sm ">
                          {stats?.avg_last_24_hours
                            .toFixed(2)
                            .toLocaleString() ?? "N/A"}
                        </td>
                        <td className="whitespace-nowrap  text-center px-3 py-4 text-sm ">
                          {params.min_stake?.toLocaleString()}
                        </td>
                        <td className="whitespace-nowrap  text-center px-3 py-4 text-sm ">
                          {params.monthly_fee !== undefined &&
                            `\$${params.monthly_fee?.toLocaleString()}`}
                          {params.monthly_fee === undefined && "N/A"}
                        </td>
                        <td className="whitespace-nowrap  text-center px-3 py-4 text-sm ">
                          {params.reward_share !== undefined &&
                            `${params.reward_share}%`}
                          {params.reward_share === undefined && "N/A"}
                        </td>

                        <td className="whitespace-nowrap  text-left px-3 py-4 text-sm ">
                          <p className="mt-2 flex gap-x-2 justify-center items-center">
                            <SimpleCheck enabled={!params.kyc} />
                          </p>
                        </td>

                        <td className="whitespace-nowrap  text-left px-3 py-4 text-sm ">
                          <p className="mt-2 flex gap-x-2 justify-center items-center">
                            <SimpleCheck
                              enabled={!!params.feature_dedicated_infra}
                            />
                          </p>
                        </td>
                        <td className="whitespace-nowrap  text-left px-3 py-4 text-sm ">
                          <p className="mt-2 flex gap-x-2 justify-center items-center">
                            <SimpleCheck enabled={params.feature_insurance} />
                          </p>
                        </td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td
                      colSpan={11}
                      className="sticky bottom-0 z-10 px-3 py-4 text-sm bg-[#ECEBE8]"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs">
                            <b>*</b> Net rewards are based on the last 24 hours
                            of total rewards from servicing relays from{" "}
                            <a
                              href="https://POKTscan.com"
                              rel="nofollow"
                              target={"_blank"}
                            >
                              POKTscan.com
                            </a>{" "}
                            using the last 7 day avg. POKT/USD price of{" "}
                            <span className="font-bold">
                              $
                              {pocketPrice?.pokt7dAvg.toLocaleString() ?? "N/A"}
                            </span>
                            . Rewards from validators are not included in this
                            calculation.
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SimpleCheck({ enabled }: { enabled: boolean }) {
  return enabled ? (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_41_933)">
        <circle cx="27" cy="25" r="16" fill="#41D28D" />
      </g>
      <path
        d="M25 29.4L21 25.4L22.4 24L25 26.6L31.6 20L33 21.4L25 29.4Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_41_933"
          x="0"
          y="0"
          width="54"
          height="54"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="5.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.52549 0 0 0 0 0.905882 0 0 0 0 0.72549 0 0 0 0.59 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_41_933"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_41_933"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ) : (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="15" stroke="#FF5D02" stroke-width="2" />
      <path
        d="M15.9998 17.4L11.0998 22.3C10.9165 22.4833 10.6831 22.575 10.3998 22.575C10.1165 22.575 9.88314 22.4833 9.6998 22.3C9.51647 22.1167 9.4248 21.8833 9.4248 21.6C9.4248 21.3167 9.51647 21.0833 9.6998 20.9L14.5998 16L9.6998 11.1C9.51647 10.9167 9.4248 10.6833 9.4248 10.4C9.4248 10.1167 9.51647 9.88332 9.6998 9.69999C9.88314 9.51665 10.1165 9.42499 10.3998 9.42499C10.6831 9.42499 10.9165 9.51665 11.0998 9.69999L15.9998 14.6L20.8998 9.69999C21.0831 9.51665 21.3165 9.42499 21.5998 9.42499C21.8831 9.42499 22.1165 9.51665 22.2998 9.69999C22.4831 9.88332 22.5748 10.1167 22.5748 10.4C22.5748 10.6833 22.4831 10.9167 22.2998 11.1L17.3998 16L22.2998 20.9C22.4831 21.0833 22.5748 21.3167 22.5748 21.6C22.5748 21.8833 22.4831 22.1167 22.2998 22.3C22.1165 22.4833 21.8831 22.575 21.5998 22.575C21.3165 22.575 21.0831 22.4833 20.8998 22.3L15.9998 17.4Z"
        fill="#FF5D02"
      />
    </svg>
  );
}

function FeatureItem({
  feature,
  params,
}: {
  feature: Feature;
  params: NodeParams;
}) {
  const { data: descriptionsData } = useFeatureDescriptions();
  const descriptions = descriptionsData || ({} as Record<string, string>);
  const { key, name, color, description, initials, format } = feature;
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="relative flex flex-col items-center group cursor-pointer">
        <button
          type="button"
          key={key}
          onClick={() => setShowModal(true)}
          className={` inline-flex items-center justify-center rounded-full h-5 w-5 text-[0.5rem] font-bold ${color}`}
          title={name}
        >
          {initials}
        </button>
        <div className="absolute bottom-0 flex-col items-center hidden mb-4 group-hover:flex ">
          <span
            className={`relative z-10 p-2 text-xs leading-none whitespace-no-wrap rounded-md shadow-lg ${color}`}
          >
            {format && format(params)}
            {!format && name}
          </span>
          <div className={`w-3 h-3 -mt-2 rotate-45 ${color}`}></div>
        </div>
      </div>

      {(descriptions[key] || description) && showModal && (
        <Modal open={showModal} setOpen={setShowModal}>
          <div className="mt-3 text-center sm:mt-5">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              {name}
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                {descriptions[key] || description}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

function VerifiedBadge({ verified }: { verified?: string }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex-inline cursor-pointer">
        <div className="relative flex flex-col items-center group cursor-pointer ml-1">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className={` inline-flex items-center justify-center rounded-full h-5 w-5 text-[0.5rem] font-bold`}
            title={verified ? verified : "Unverified"}
          >
            {verified && verified !== "Verified Through Dashboard" && (
              <CheckBadgeIcon className="h-5 w-5 inline-flex align-top text-[#3A9C90] notdark:text-[#3A9C90]" />
            )}
            {verified && verified === "Verified Through Dashboard" && (
              <CheckBadgeIcon className="h-5 w-5 inline-flex align-top text-gray-500 notdark:text-gray-500" />
            )}
            {!verified && (
              <QuestionMarkCircleIcon className="h-5 w-5 inline-flex align-top text-gray-500 notdark:text-gray-500" />
            )}
          </button>
          <div className="absolute bottom-0 flex-col items-center hidden mb-4 group-hover:flex ">
            <span
              className={`relative z-10 p-2 text-xs leading-none whitespace-no-wrap rounded-md shadow-lg ${
                verified &&
                verified !== "Verified Through Dashboard" &&
                `bg-green-100`
              }
              ${
                verified &&
                verified === "Verified Through Dashboard" &&
                `bg-gray-100`
              } ${!verified && `bg-gray-100`}`}
            >
              {verified ? verified : "Data not verified"}
            </span>
            <div
              className={`w-3 h-3 -mt-2 rotate-45 ${
                verified &&
                verified !== "Verified Through Dashboard" &&
                `bg-green-100`
              }
              ${
                verified &&
                verified === "Verified Through Dashboard" &&
                `bg-gray-100`
              } ${!verified && `bg-gray-100`}`}
            ></div>
          </div>
        </div>
        <Modal open={showModal} setOpen={setShowModal}>
          <div
            className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${
              verified &&
              verified !== "Verified Through Dashboard" &&
              `bg-green-100`
            }
              ${
                verified &&
                verified === "Verified Through Dashboard" &&
                `bg-gray-100`
              } ${!verified && `bg-gray-100`}`}
          >
            {verified && verified !== "Verified Through Dashboard" && (
              <CheckBadgeIcon className="h-10 w-10  text-[#3A9C90] notdark:text-[#3A9C90]" />
            )}
            {verified && verified === "Verified Through Dashboard" && (
              <CheckBadgeIcon className="h-10 w-10  text-gray-500 notdark:text-gray-500" />
            )}
            {!verified && (
              <QuestionMarkCircleIcon className="h-10 w-10  text-gray-500 notdark:text-gray-500" />
            )}
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900 capitalize"
            >
              {verified && verified}
              {!verified && "Data not verified"}
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                {verified &&
                  verified !== "Verified Through Dashboard" &&
                  "This staking service provider has been verified."}
                {verified === "Verified Through Dashboard" && (
                  <span className="block">
                    This staking service provider has been verified through the
                    provider's dashboard.
                  </span>
                )}
                {!verified && (
                  <p>
                    This staking service provider has not been verified. Please
                    reach out to us on Telegram to verify this staking service
                    provider.
                  </p>
                )}
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
