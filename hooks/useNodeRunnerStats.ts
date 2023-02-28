import { useEffect, useState } from "react";
import useSWR from "swr";

export interface NodeStat {
  avg_serviced_per_15k: number;
  avg_last_24_hours: number;
  avg_last_48_hours: number;
  avg_last_6_hours: number;
  runner_domain: string;
  tokens: number;
}

export default function useNodeRunnerStats() {
  const apiUrl = `${process.env.NEXT_PUBLIC_POKT_STATS_BASE_URI}/v1/runners-perf`;
  const request = { method: "GET" };
  const { data, error } = useSWR<NodeStat[], unknown>(
    [apiUrl, request],
    async (url: string, request: RequestInit) => {
      const response = await window.fetch(url, {
        headers: { "Content-Type": "application/json" },
        ...request,
      });

      if (!response.ok) {
        try {
          const error = await response.json();
          throw new Error(
            `Failed to fetch user node stats: ${error.message ?? error}`
          );
        } catch (e) {
          // do nothing
        }

        throw new Error(
          `Failed to fetch user node stats: ${response.statusText}`
        );
      } else {
        return response.json();
      }
    }
  );

  return {
    data,
    error,
    isLoading: !error && !data,
  };
}

/**
 * This is the same as useNodeRunnerStats, but it uses the new stats API which takes all the averages for the last 7 days.
 */
export function useNodeRunnerStatsV2() {
  const apiUrl = `${process.env.NEXT_PUBLIC_POKT_STATS_BASE_URI}/v2/runners-perf`;
  const request = { method: "GET" };
  const { data, error } = useSWR<NodeStat[], unknown>(
    [apiUrl, request],
    async (url: string, request: RequestInit) => {
      const response = await window.fetch(url, {
        headers: { "Content-Type": "application/json" },
        ...request,
      });

      if (!response.ok) {
        try {
          const error = await response.json();
          throw new Error(
            `Failed to fetch user node stats: ${error.message ?? error}`
          );
        } catch (e) {
          // do nothing
        }

        throw new Error(
          `Failed to fetch user node stats: ${response.statusText}`
        );
      } else {
        return response.json();
      }
    }
  );

  return {
    data,
    error,
    isLoading: !error && !data,
  };
}
