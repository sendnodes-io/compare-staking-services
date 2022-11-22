import useCalculateNodeRunnerData from "../hooks/useCalculateNodeRunnerData";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { features } from "./Header";

export default function Table() {
  const { data, isLoading, error } = useCalculateNodeRunnerData();

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
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-0 w-full">
      <div className="mt-8 flex flex-col items-center w-full">
        <div className="-my-2 overflow-x-auto max-w-[90vw] sm:max-w-full w-full md:max-w-7xl">
          <div className="inline-block min-w-full py-2 align-middle px-1">
            <div className="overflow-x-hidden overflow-y-auto shadow ring-1 ring-black ring-opacity-5 md:rounded-lg max-h-[80vh]">
              <table className="min-w-full divide-y divide-gray-300 relative z-10">
                <thead className="bg-gray-50 dark:bg-gray-900 sticky top-0 z-10">
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      <span className="ml-12">Name</span>
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      Features
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      <span title="24h Avg. Net POKT Rewards per 15,000 POKT">
                        24h Net (POKT)
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      <span title="24h Avg. Gross POKT Rewards per 15,000 POKT">
                        24h Gross (POKT)
                      </span>
                    </th>

                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      Minimum Staking Amount (POKT)
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      Monthly Fee (USD)
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      Reward Share %
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:bg-neutral-700">
                  {data
                    .sort((a, b) => b.net - a.net)
                    .map(({ net, params, stats }, idx) => (
                      <tr key={`tr-${JSON.stringify(params)}`}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-100 ">
                          <span className="text-xl font-black inline-block mr-2">
                            {idx + 1}.
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-100 ">
                          <a href={params.url} target="_blank" rel="nofollow">
                            <div className="flex items-center justify-start gap-x-2">
                              <div className="h-full w-12 flex-shrink-0 items-center">
                                {!!params.logo_url && (
                                  <div className="h-10 w-10 bg-neutral-500 dark:bg-gray-500 rounded-full flex justify-center items-center">
                                    <img
                                      className="h-8 w-8 m-auto rounded-full object-center object-contain"
                                      src={params.logo_url}
                                      alt={params.name}
                                    />
                                  </div>
                                )}
                              </div>
                              <div className="">
                                <div className="font-medium text-gray-900 dark:text-gray-100">
                                  {params.name}
                                </div>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td className="whitespace-nowrap  text-left px-3 py-4 text-sm text-gray-900 dark:text-gray-100">
                          <p className="mt-2 flex gap-x-2 justify-center items-center">
                            {features.map(
                              ({ key, name, color, format }) =>
                                key in params &&
                                !!(params as any)[key] && (
                                  <div className="relative flex flex-col items-center group cursor-pointer">
                                    <span
                                      key={key}
                                      className={` inline-flex items-center rounded-full py-2 px-2 text-[0.5rem] font-medium ${color}`}
                                      title={name}
                                    ></span>
                                    <div className="absolute bottom-0 flex-col items-center hidden mb-4 group-hover:flex ">
                                      <span
                                        className={`relative z-10 p-2 text-xs leading-none whitespace-no-wrap rounded-md shadow-lg ${color}`}
                                      >
                                        {format && format(params)}
                                        {!format && name}
                                      </span>
                                      <div
                                        className={`w-3 h-3 -mt-2 rotate-45 ${color}`}
                                      ></div>
                                    </div>
                                  </div>
                                )
                            )}
                          </p>
                        </td>
                        <td className="whitespace-nowrap  text-center px-3 py-4 text-sm text-gray-900 dark:text-gray-100">
                          {net.toFixed(2).toLocaleString() ?? "N/A"}
                        </td>
                        <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-900 dark:text-gray-100">
                          {stats?.avg_last_24_hours
                            .toFixed(2)
                            .toLocaleString() ?? "N/A"}
                        </td>
                        <td className="whitespace-nowrap  text-center px-3 py-4 text-sm text-gray-900 dark:text-gray-100">
                          {params.min_stake.toLocaleString()}
                        </td>
                        <td className="whitespace-nowrap  text-center px-3 py-4 text-sm text-gray-900 dark:text-gray-100">
                          ${params.monthly_fee?.toLocaleString() ?? "N/A"}
                        </td>
                        <td className="whitespace-nowrap  text-center px-3 py-4 text-sm text-gray-900 dark:text-gray-100">
                          {params.reward_share}%
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
