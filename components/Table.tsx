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
  console.log("data", data);

  if (error) {
    return (
      <div className="rounded-md bg-yellow-50 p-8">
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
                {error.toString()}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Pocket Network Staking Services
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all Pocket Network staking services. This list breaks down
            the services by their staking rewards, staking fees, and staking
            minimums.
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <div className="-my-2 -mx-4 overflow-x-auto max-w-[90vw] sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Auto-compounding
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Needs KYC
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Minimum Staking Amount
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Monthly Fee (USD)
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Reward Share
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      <span title="24h Avg. Net POKT Rewards per 15,000 POKT">
                        24h Net
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      <span title="6h Avg. Gross POKT Rewards per 15,000 POKT">
                        6h Gross
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      <span title="24h Avg. Gross POKT Rewards per 15,000 POKT">
                        24h Gross
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      <span title="48h Avg. Gross POKT Rewards per 15,000 POKT">
                        48h Gross
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data
                    .sort((d) => d.net)
                    .map(({ net, params, stats }) => (
                      <tr key={`tr-${JSON.stringify(params)}`}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <a href={params.url} target="_blank" rel="nofollow">
                            <div className="flex items-center">
                              <div className="w-10 flex-shrink-0 items-center">
                                {!!params.logo_url && (
                                  <img
                                    className="w-10 rounded-full"
                                    src={params.logo_url}
                                    alt={params.name}
                                  />
                                )}
                              </div>
                              <div className="ml-4">
                                <div className="font-medium text-gray-900">
                                  {params.name}
                                </div>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {params.auto_compounding}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {params.kyc}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {params.min_stake} POKT
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          ${params.monthly_fee}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {params.reward_share}%
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {net.toFixed(2) ?? "N/A"}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {stats?.avg_last_6_hours.toFixed(2) ?? "N/A"}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {stats?.avg_last_24_hours.toFixed(2) ?? "N/A"}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {stats?.avg_last_48_hours.toFixed(2) ?? "N/A"}
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
