import React, { useMemo, useRef } from 'react';

import useTheme from '@/hooks/useTheme';
import useDevice from '@/hooks/useDevice';
import CustomSlider from '@/components/customSlider';
import { POOL_BASE } from '@/constants/urls';
import { IOsmosisData } from '@/utils/api';

import { TitleWrapper, LabelTypo, TitleTypo, DescriptionTypo } from '../common/styles';
import {
  ContentsWrapper,
  PoolItem,
  PoolLabel,
  PoolList,
  PoolLogo,
  PoolSectionContainer,
  PoolSectionWrapper,
  PoolTitle,
  InfoDivider,
  InfoItem,
  InfoLabel,
  InfoList,
  InfoValue,
  PoolButton,
  ChartImage,
  CustomSliderWrapper,
} from './styles';

const PoolSection = ({ osmosisData }: { osmosisData: IOsmosisData | null }) => {
  const { theme } = useTheme();
  const { isMobile } = useDevice();
  const sliderRef = useRef<any>();

  const poolList = useMemo(() => {
    if (osmosisData && osmosisData.poolList) return osmosisData.poolList;
    return [];
  }, [osmosisData]);

  return (
    <PoolSectionContainer>
      <PoolSectionWrapper>
        <TitleWrapper>
          <LabelTypo>POOLS</LabelTypo>
          <TitleTypo>
            FIRMACHAIN <span>ON</span> OSMOSIS
          </TitleTypo>
          <DescriptionTypo>Explore active liquidity pools for FIRMACHAIN on OSMOSIS.</DescriptionTypo>
        </TitleWrapper>
        <ContentsWrapper>
          {isMobile ? (
            <CustomSliderWrapper>
              <CustomSlider slidesToShow={1} dots={true} ref={sliderRef}>
                {poolList.map((pool: any, index: number) => (
                  <PoolItem key={index}>
                    <PoolLogo $src={index === 0 ? theme.urls.poolFctOsmo : theme.urls.poolAtomFct} />
                    <PoolLabel>Pools #{pool.poolId}</PoolLabel>
                    <PoolTitle>{pool.poolName}</PoolTitle>
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
                    <ChartImage src={theme.urls.chart} />

                    <PoolButton href={`${POOL_BASE}/${pool.poolId}`} target={'_blank'} rel={'noopener noreferrer'}>
                      Trade Pair
                    </PoolButton>
                  </PoolItem>
                ))}
              </CustomSlider>
            </CustomSliderWrapper>
          ) : (
            <PoolList>
              {poolList.map((pool: any, index: number) => (
                <PoolItem key={index}>
                  <PoolLogo $src={index === 0 ? theme.urls.poolFctOsmo : theme.urls.poolAtomFct} />
                  <PoolLabel>Pools #{pool.poolId}</PoolLabel>
                  <PoolTitle>{pool.poolName}</PoolTitle>
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
                  <ChartImage src={theme.urls.chart} />

                  <PoolButton href={`${POOL_BASE}/${pool.poolId}`} target={'_blank'} rel={'noopener noreferrer'}>
                    Trade Pair
                  </PoolButton>
                </PoolItem>
              ))}
            </PoolList>
          )}
        </ContentsWrapper>
      </PoolSectionWrapper>
    </PoolSectionContainer>
  );
};

export default React.memo(PoolSection);
