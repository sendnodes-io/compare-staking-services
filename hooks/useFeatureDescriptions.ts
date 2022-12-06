import useSWR from "swr";

export type FeatureDescription = Record<string, string>;

interface SheetData {
  values: string[][];
}

export default function useFeatureDescriptions() {
  const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/1s59gpojdE94o1M8BQnNM36KB_hgF-vbVvm912d3l4PY/values/definitions?alt=json&key=${process.env.NEXT_PUBLIC_G_API_KEY}`;

  const request = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };
  const { data, error } = useSWR<FeatureDescription, unknown>(
    [apiUrl, request],
    async (url: string, request: RequestInit) => {
      const response = await window.fetch(url, {
        headers: { "Content-Type": "application/json" },
        ...request,
      });

      if (!response.ok) {
        throw new Error(
          "Failed to fetch node runner params: " + response.statusText
        );
      } else {
        const data = (await response.json()) as SheetData;
        return (
          Object.fromEntries(
            data.values.filter((r) => r.length && r.every(Boolean))
          ) || {}
        );
      }
    }
  );

  return {
    data,
    error,
    isLoading: !error && !data,
  };
}
