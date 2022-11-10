import useSWR from 'swr'

export interface NodeParams {
  name: string
  runner_domain: string
  monthly_fee?: number
  fee_per_stake_bucket?: number
  reward_share: number
  one_time_fee?: number
  min_stake: number
  reward_period: number
  auto_compounding: boolean
  insurance_provider_name?: string
  insurance_provider_url?: string
  url: string
  logo_url?: string
  kyc: boolean
  net_rewards?: number // used for manual input from sheet
  gross_rewards?: number // used for manual input from sheet
}

interface SheetData {
  values: string[][]
}

function parseSheetData(data: SheetData):NodeParams[] {
  const rows = data.values
  const result: NodeParams[] = [];
  if (!rows) return result;
  const keys = rows[0];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const formatted: {[key: string]: any} = {}
    for (let ri= 0; ri < row.length; ri++) {
      const val = row[ri];
      const key = keys[ri];
      if (val === "FALSE") {
        formatted[key] = false
      } else if (val === "TRUE") {
        formatted[key] = true
      } else if (!isNaN(parseFloat(val))) {
        formatted[key] = parseFloat(val)
      } else if (val && !formatted[key]) {
        formatted[key] = val
      }
    }
    result.push(formatted as NodeParams)
  }
  return result
}

export default function useNodeRunnerParams(){
  const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/1s59gpojdE94o1M8BQnNM36KB_hgF-vbVvm912d3l4PY/values/data?alt=json&key=${process.env.NEXT_PUBLIC_G_API_KEY}`

  const request = { 
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  }
  const { data, error } = useSWR<NodeParams[], unknown>(
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
        return parseSheetData(await response.json());
      }
    }
  );

  
  
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}