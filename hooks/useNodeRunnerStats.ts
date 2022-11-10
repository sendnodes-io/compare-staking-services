import { useEffect, useState } from "react";
import useSWR from 'swr'

export interface NodeStat {
  avg_last_24_hrs: number
  avg_last_48_hrs: number
  avg_last_6_hrs: number
  runner_domain: string
}

export interface NodeStats {
  [key: string]: NodeStat
}

export default function useNodeRunnerStats(): NodeStats | undefined{
  const apiUrl = "https://pokt-stats.sendnodes.io/v1/runners-perf";
  const request = { method: "GET"}
  const { data, error } = useSWR<NodeStats, unknown>(
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

  
  
  return data
}