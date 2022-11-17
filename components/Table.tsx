import useCalculateNodeRunnerData from "../hooks/useCalculateNodeRunnerData";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

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
    <div className="px-4 sm:px-0">
      <div className="mt-8 flex flex-col items-center">
        <div className="-my-2 overflow-x-auto max-w-[90vw] sm:max-w-full">
          <div className="inline-block min-w-full py-2 align-middle px-1">
            <div className="overflow-x-hidden overflow-y-auto shadow ring-1 ring-black ring-opacity-5 md:rounded-lg max-h-[80vh]">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50 dark:bg-sky-800 sticky top-0">
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-6"
                    >
                      <span title="24h Avg. Net POKT Rewards per 15,000 POKT">
                        24h Net (POKT)
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-6"
                    >
                      <span title="24h Avg. Gross POKT Rewards per 15,000 POKT">
                        24h Gross (POKT)
                      </span>
                    </th>

                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-6"
                    >
                      Minimum Staking Amount (POKT)
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-6"
                    >
                      Monthly Fee (USD)
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-6"
                    >
                      Reward Share %
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:bg-slate-700">
                  {data
                    .sort((a, b) => b.net - a.net)
                    .map(({ net, params, stats }, idx) => (
                      <tr key={`tr-${JSON.stringify(params)}`}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-100 ">
                          <a href={params.url} target="_blank" rel="nofollow">
                            <div className="flex items-center">
                              <span className="text-xl font-black inline-block mr-2">
                                {idx + 1}.
                              </span>
                              <div className="w-12 flex-shrink-0 items-center">
                                {!!params.logo_url && (
                                  <div className="w-12 bg-slate-500 dark:bg-violet-500 p-2 rounded-full">
                                    <img
                                      className="w-full rounded-full"
                                      src={params.logo_url}
                                      alt={params.name}
                                    />
                                  </div>
                                )}
                              </div>
                              <div className="ml-4">
                                <div className="font-medium text-gray-900 dark:text-gray-100">
                                  {params.name}
                                </div>
                              </div>
                            </div>
                          </a>
                          <p className="mt-2 flex gap-x-2">
                            {params.auto_compounding && (
                              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                Auto-compounding
                              </span>
                            )}
                            {params.kyc && (
                              <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                Needs KYC
                              </span>
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
