import useSWR from 'swr'

export interface poktPriceData {
  pokt7dAvg: number
  pokt30dAvg: number
  pokt30dMax: number
  pokt30dMin: number
  pricesPerDayUsd: {
    [key: string]: number
  }
}

export default function usePoktPrice(){
  const apiUrl = "https://onchainapi.sendnodes.io/pocket.mainnet";
  const raw = JSON.stringify({
    method: "pokt_getPriceData",
    id: 1,
    jsonrpc: "2.0",
    params: {}
  })
  const request = { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: raw,
    redirect: "follow",
  }
  const { data, error } = useSWR<poktPriceData, unknown>(
    [apiUrl, request],
    async (url: string, request: RequestInit) => {
      const response = await window.fetch(url, {
        headers: { "Content-Type": "application/json" },
        ...request,
      });

      if (!response.ok) {
        throw new Error(
          "Failed to fetch user pokt price data: " + response.statusText
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
  }
}