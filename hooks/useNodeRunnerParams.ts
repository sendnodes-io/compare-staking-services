import useSWR from 'swr'

export interface NodeParams {
  name: string
  runnerDomain: string
  monthlyFee?: number
  feePerStakeBucket?: number
  rewardShare: number
  oneTimeFee?: number
  minStake: number
  autoCompounding: boolean
  insuranceProviderName?: string
  insuranceProviderUrl?: string
  url: string
  logoUrl?: string
  kyc: boolean
}

const SheetKeyMap: {[key: string]: string} = {
  'name': 'name',
  'runner_domain': 'runnerDomain',
  'monthly_fee': 'monthlyFee',
  'fee_per_stake_bucket': 'feePerStakeBucket',
  'reward_share': 'rewardShare',
  'one_time_fee': 'oneTimeFee',
  'min_stake': 'minStake',
  'auto_compounding': 'autoCompounding',
  'insurance_provider_name': 'insuranceProviderName',
  'insurance_provider_url': 'insuranceProviderUrl',
  'url': 'url',
  'logoUrl': 'logoUrl',
  'kyc': 'kyc'
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
        formatted[SheetKeyMap[key]] = false
      }
      if (val === "TRUE") {
        formatted[SheetKeyMap[key]] = true
      }
      if (!isNaN(parseFloat(val))) {
        formatted[SheetKeyMap[key]] = parseFloat(val)
      }
      if (val && !formatted[SheetKeyMap[key]]) {
        formatted[SheetKeyMap[key]] = val
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
  const { data, error } = useSWR<unknown, unknown>(
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