import axios from 'axios';
import { COINGECKO } from '@/constants/urls';

export interface IOsmosisData {
  poolList: IPool[];
  swapData: ISwap;
}

export interface IPool {
  poolId: string;
  poolName: string;
  volume24hUsdText: string;
  poolLiquidity: string;
  swapFee: string;
  poolAssets: { denom: string; amount: string; weight: string }[];
}

export interface ISwap {
  fctosmo: string;
  swapFee: string;
}

export const getMediumList = () => {
  return axios.get<any>(process.env.MEDIUM!);
};

export const getFCTPrice = async () => {
  try {
    const { data } = await axios.get(COINGECKO);
    return data.firmachain.usd.toFixed(6);
  } catch (e) {
    console.error(e);
    return '-';
  }
};

export const getOsmosisData = async () => {
  try {
    const { data } = await axios.get(`${process.env.API_HOST}/relayers/pools`);
    const result = data.result;

    const poolList = result
      .map((pool: any) => {
        const poolId = pool.id;

        const poolName = pool.poolNameByDenom;
        const volume24hUsd = JSON.parse(pool.volume24hUsd);
        const volume24hUsdText = `${volume24hUsd.fiat.symbol}${volume24hUsd.amount.match(/^-?\d+(?:\.\d{0,2})?/)[0]}`;
        const totalFiatValueLocked = JSON.parse(pool.totalFiatValueLocked);
        const poolLiquidity = `${totalFiatValueLocked.fiat.symbol}${
          totalFiatValueLocked.amount.match(/^-?\d+(?:\.\d{0,2})?/)[0]
        }`;
        const swapFee = `${(parseFloat(pool.raw.pool_params.swap_fee) * 100).toFixed(1)}%`;

        const totalWeight = parseFloat(pool.raw.total_weight);

        const poolAssets = pool.raw.pool_assets.map((asset: any, index: number) => {
          const denom = asset.token.denom;
          const amount = (parseFloat(asset.token.amount) / 10 ** 6).toFixed();
          const denomIndex = pool.coinDenoms.indexOf(denom);
          const parsedDenom = denomIndex > 0 ? pool.coinDenoms[denomIndex - 1] : denom;

          const weight = parseFloat(asset.weight);
          const weightPercentage = ((weight / totalWeight) * 100).toFixed(0);

          return {
            denom: parsedDenom,
            amount,
            weight: weightPercentage + '%',
          };
        });

        return {
          poolId,
          poolName,
          volume24hUsdText,
          poolLiquidity,
          swapFee,
          poolAssets,
        };
      })
      .sort((a: any, b: any) => parseInt(a.poolId) - parseInt(b.poolId));

    const osmoPool = result.find((v: any) => v.poolNameByDenom === 'FCT/OSMO');
    const ufct = osmoPool.raw.pool_assets[0].token.amount;
    const uosmo = osmoPool.raw.pool_assets[1].token.amount;
    const swapFee = `${(parseFloat(osmoPool.raw.pool_params.swap_fee) * 100).toFixed(1)}%`;
    const fctosmo = (uosmo / ufct).toFixed(5);

    const swapData = {
      fctosmo,
      swapFee,
    };

    return {
      poolList,
      swapData,
    };
  } catch (e) {
    console.error(e);
  }
};
