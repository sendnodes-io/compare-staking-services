import { useEffect, useState } from "react";
import useSWR from "swr";

export interface NodeStat {
  avg_last_24_hours: number;
  avg_last_48_hours: number;
  avg_last_6_hours: number;
  runner_domain: string;
}

export default function useNodeRunnerStats() {
  const apiUrl = "https://pokt-stats.sendnodes.io/v2/runners-perf";
  const request = { method: "GET" };
  const { data, error } = useSWR<NodeStat[], unknown>(
    [apiUrl, request],
    async (url: string, request: RequestInit) => {
      const response = await window.fetch(url, {
        headers: { "Content-Type": "application/json" },
        ...request,
      });

      if (!response.ok) {
        throw new Error(
          "Failed to fetch user node stats: " + response.statusText
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
