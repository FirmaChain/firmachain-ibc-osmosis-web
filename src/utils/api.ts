import axios from 'axios';

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
}

export interface ISwap {
  fctosmo: string;
  swapFee: string;
}

export const getMediumList = () => {
  return axios.get<any>(process.env.MEDIUM!);
};

export const getOsmosisData = async () => {
  try {
    const { data } = await axios.get(`${process.env.API_HOST}/relayers/pools`);
    const result = data.result;

    const poolList = result.map((pool: any) => {
      const poolId = pool.id;

      const poolName = pool.poolNameByDenom;
      const volume24hUsd = JSON.parse(pool.volume24hUsd);
      const volume24hUsdText = `${volume24hUsd.fiat.symbol}${volume24hUsd.amount.match(/^-?\d+(?:\.\d{0,2})?/)[0]}`;
      const totalFiatValueLocked = JSON.parse(pool.totalFiatValueLocked);
      const poolLiquidity = `${totalFiatValueLocked.fiat.symbol}${
        totalFiatValueLocked.amount.match(/^-?\d+(?:\.\d{0,2})?/)[0]
      }`;
      const swapFee = `${(parseFloat(pool.raw.pool_params.swap_fee) * 100).toFixed(1)}%`;

      return {
        poolId,
        poolName,
        volume24hUsdText,
        poolLiquidity,
        swapFee,
      };
    });

    const osmoPool = result[0];
    const ufct = osmoPool.raw.pool_assets[0].token.amount;
    const uosmo = osmoPool.raw.pool_assets[1].token.amount;
    const swapFee = `${(parseFloat(osmoPool.raw.pool_params.swap_fee) * 100).toFixed(1)}%`;
    const fctosmo = (uosmo / ufct).toFixed(6);

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
