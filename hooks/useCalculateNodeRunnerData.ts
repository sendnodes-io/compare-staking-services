import useNodeRunnerStats, { NodeStat } from "./useNodeRunnerStats";
import useNodeRunnerParams, { NodeParams } from "./useNodeRunnerParams";
import usePoktPrice from "./usePoktPrice";
import { useMemo } from "react";

export interface NodeData {
  net: number;
  stats?: NodeStat;
  params: NodeParams;
}

export default function useCalculateNodeRunnerData() {
  const stats = useNodeRunnerStats();
  const params = useNodeRunnerParams();
  const price = usePoktPrice();

  const isLoading = stats.isLoading || params.isLoading || price.isLoading;
  const error = stats.error || params.error || price.error;

  return useMemo(() => {
    const data: NodeData[] = [];
    if (!stats.data || !params.data || !price.data || isLoading || error) {
      return {
        data,
        isLoading,
        error,
      };
    }

    const statMap = new Map<string, NodeStat>();
    stats.data.forEach((stat) => {
      statMap.set(stat.runner_domain, stat);
    });

    for (let i = 0; i < params.data.length; i++) {
      const param = params.data[i];
      const stat = statMap.get(param.runner_domain);
      if (param.net_rewards) {
        if (stat && param.gross_rewards) {
          stat.avg_last_24_hours = param.gross_rewards
        }
        data.push({
          net: param.net_rewards,
          stats: stat,
          params: param,
        });
      } else if (stat) {
        let net = stat.avg_last_24_hours;
        if (param.monthly_fee) {
          let dailyFeeUsd = (param.monthly_fee * 12) / 365;
          if (
            param.fee_per_stake_bucket &&
            param.fee_per_stake_bucket > 15000
          ) {
            dailyFeeUsd =
              dailyFeeUsd / Math.floor(param.fee_per_stake_bucket / 15000);
          }
          const dailyFeePokt = dailyFeeUsd / price.data.pokt7dAvg;
          net = stat.avg_last_24_hours - dailyFeePokt;
        }
        if (param.reward_share) {
          net = net * (1 - param.reward_share / 100);
        }
        const n: NodeData = {
          net: net,
          stats: stat,
          params: param,
        };
        data.push(n);
      }
    }
    return {
      data,
      isLoading,
      error,
    };
  }, [isLoading, error]);
}
