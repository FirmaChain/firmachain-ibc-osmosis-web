import React, { useMemo, useRef } from 'react';

import useDevice from '@/hooks/useDevice';
import useTheme from '@/hooks/useTheme';
import { POOL_BASE } from '@/constants/urls';
import { IOsmosisData } from '@/utils/api';
import { numberWithCommas } from '@/utils/common';

import CustomSlider from '@/components/customSlider';

import {
  PoolItem,
  PoolLabel,
  PoolList,
  PoolLogo,
  PoolTitle,
  InfoDivider,
  InfoItem,
  InfoLabel,
  InfoList,
  InfoValue,
  PoolButton,
  ChartImage,
  CustomSliderWrapper,
  GuageContainer,
  GuageCurrencyWrapper,
  GaugeCurrency,
  GuageWrapper,
  GuageBackground,
  GuageBar,
  GuageValueWrapper,
  GuageValue,
  PoolBg,
  PoolTopWrapper,
  PoolTitleWrapper,
} from './styles';

const Pool = ({ osmosisData }: { osmosisData: IOsmosisData | null }) => {
  const { theme } = useTheme();
  const { isMobile } = useDevice();
  const sliderRef = useRef<any>();

  const poolList = useMemo(() => {
    console.log(osmosisData);
    if (osmosisData && osmosisData.poolList) return osmosisData.poolList;
    return [];
  }, [osmosisData]);

  return (
    <React.Fragment>
      {isMobile ? (
        <CustomSliderWrapper>
          <CustomSlider slidesToShow={1} dots={true} ref={sliderRef}>
            {poolList.map((pool: any, index: number) => (
              <PoolItem key={index}>
                <PoolTopWrapper>
                  <PoolTitleWrapper>
                    <PoolLabel>Pools #{pool.poolId}</PoolLabel>
                    <PoolTitle>{pool.poolName}</PoolTitle>
                  </PoolTitleWrapper>
                  <PoolLogo $src={index === 0 ? theme.urls.poolFctOsmo : theme.urls.poolAtomFct} />
                </PoolTopWrapper>
                <InfoList>
                  <InfoItem>
                    <InfoLabel>24h Trading{isMobile ? <br /> : ' '}volume</InfoLabel>
                    <InfoValue>{pool.volume24hUsdText}</InfoValue>
                  </InfoItem>
                  <InfoDivider />
                  <InfoItem>
                    <InfoLabel>Pool{isMobile ? <br /> : ' '}liquidity</InfoLabel>
                    <InfoValue>{pool.poolLiquidity}</InfoValue>
                  </InfoItem>
                  <InfoDivider />
                  <InfoItem>
                    <InfoLabel>Swap{isMobile ? <br /> : ' '}fee</InfoLabel>
                    <InfoValue>{pool.swapFee}</InfoValue>
                  </InfoItem>
                </InfoList>
                <GuageContainer>
                  <GuageCurrencyWrapper>
                    <GaugeCurrency>{pool.poolAssets[0].denom}</GaugeCurrency>
                    <GaugeCurrency>{pool.poolAssets[1].denom}</GaugeCurrency>
                  </GuageCurrencyWrapper>
                  <GuageWrapper>
                    <GuageBackground>
                      <GuageBar $weight={pool.poolAssets[0].weight} />
                    </GuageBackground>
                  </GuageWrapper>
                  <GuageValueWrapper>
                    <GuageValue>{numberWithCommas(pool.poolAssets[0].amount)}</GuageValue>
                    <GuageValue>{numberWithCommas(pool.poolAssets[1].amount)}</GuageValue>
                  </GuageValueWrapper>
                </GuageContainer>
                <PoolButton href={`${POOL_BASE}/${pool.poolId}`} target={'_blank'} rel={'noopener noreferrer'}>
                  Trade Pair
                </PoolButton>
                <PoolBg />
              </PoolItem>
            ))}
          </CustomSlider>
        </CustomSliderWrapper>
      ) : (
        <PoolList>
          {poolList.map((pool: any, index: number) => (
            <PoolItem key={index}>
              <PoolTopWrapper>
                <PoolTitleWrapper>
                  <PoolLabel>Pools #{pool.poolId}</PoolLabel>
                  <PoolTitle>{pool.poolName}</PoolTitle>
                </PoolTitleWrapper>
                <PoolLogo $src={index === 0 ? theme.urls.poolFctOsmo : theme.urls.poolAtomFct} />
              </PoolTopWrapper>
              <InfoList>
                <InfoItem>
                  <InfoLabel>24h Trading{isMobile ? <br /> : ' '}volume</InfoLabel>
                  <InfoValue>{pool.volume24hUsdText}</InfoValue>
                </InfoItem>
                <InfoDivider />
                <InfoItem>
                  <InfoLabel>Pool{isMobile ? <br /> : ' '}liquidity</InfoLabel>
                  <InfoValue>{pool.poolLiquidity}</InfoValue>
                </InfoItem>
                <InfoDivider />
                <InfoItem>
                  <InfoLabel>Swap{isMobile ? <br /> : ' '}fee</InfoLabel>
                  <InfoValue>{pool.swapFee}</InfoValue>
                </InfoItem>
              </InfoList>

              <GuageContainer>
                <GuageCurrencyWrapper>
                  <GaugeCurrency>{pool.poolAssets[0].denom}</GaugeCurrency>
                  <GaugeCurrency>{pool.poolAssets[1].denom}</GaugeCurrency>
                </GuageCurrencyWrapper>
                <GuageWrapper>
                  <GuageBackground>
                    <GuageBar $weight={pool.poolAssets[0].weight} />
                  </GuageBackground>
                </GuageWrapper>
                <GuageValueWrapper>
                  <GuageValue>{numberWithCommas(pool.poolAssets[0].amount)}</GuageValue>
                  <GuageValue>{numberWithCommas(pool.poolAssets[1].amount)}</GuageValue>
                </GuageValueWrapper>
              </GuageContainer>

              <PoolButton href={`${POOL_BASE}/${pool.poolId}`} target={'_blank'} rel={'noopener noreferrer'}>
                Trade Pair
              </PoolButton>
              <PoolBg />
            </PoolItem>
          ))}
        </PoolList>
      )}
    </React.Fragment>
  );
};

export default Pool;
