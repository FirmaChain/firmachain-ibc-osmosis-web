import React, { useMemo } from 'react';

import useTheme from '@/hooks/useTheme';
import { OSMOSIS_SWAP } from '@/constants/urls';
import { IOsmosisData } from '@/utils/api';
import MarqueeImage from '@/components/marqueeImage';

import { DescriptionTypo, LabelTypo, TitleTypo, TitleWrapper } from '../common/styles';
import {
  CoinWrapper,
  ContentsWrapper,
  Currency,
  CurrencyIcon,
  CurrencyIconImage,
  CurrencyTypo,
  DownArrow,
  FCTWrapper,
  OSMOWrapper,
  SwapButton,
  SwapCard,
  SwapIcon,
  SwapIconWrapper,
  SwapInfoLeft,
  SwapInfoRight,
  SwapInfoWrapper,
  SwapLogo,
  SwapLogoWrapper,
  SwapSectionContainer,
  SwapSectionWrapper,
  SwapTypo,
  SwapWrapper,
  Value,
} from './styles';

const SwapSection = ({ osmosisData }: { osmosisData: IOsmosisData | null }) => {
  const { theme } = useTheme();

  const coinDataList = Array.from({ length: 14 }, (_, i) => ({
    name: '',
    img: theme.urls.coinList[i],
  }));

  const exampleCurrency = useMemo(() => {
    try {
      if (osmosisData !== null) {
        return (parseFloat(osmosisData.swapData.fctosmo) * 100).toFixed(6);
      } else {
        return 0;
      }
    } catch (e) {
      return 0;
    }
  }, [osmosisData]);

  const osmoValue = useMemo(
    () => (osmosisData && osmosisData.swapData ? osmosisData.swapData.fctosmo : '-'),
    [osmosisData]
  );
  const osmoSwapFee = useMemo(
    () => (osmosisData && osmosisData.swapData ? osmosisData.swapData.swapFee : '-'),
    [osmosisData]
  );

  return (
    <SwapSectionContainer>
      <SwapSectionWrapper>
        <TitleWrapper>
          <LabelTypo>SWAP</LabelTypo>
          <TitleTypo>Easily $FCT Swap</TitleTypo>
          <DescriptionTypo>
            Effortlessly convert your $FCT to other cryptocurrencies on the OSMOSIS Exchange.
          </DescriptionTypo>
        </TitleWrapper>
        <ContentsWrapper>
          <CoinWrapper>
            <MarqueeImage dataList={coinDataList} />
          </CoinWrapper>
          <SwapCard>
            <SwapLogoWrapper>
              <SwapLogo src={theme.urls.osmosisLogo3} />
              <SwapTypo>OSMOSIS SWAP</SwapTypo>
            </SwapLogoWrapper>
            <SwapWrapper>
              <FCTWrapper>
                <Currency>
                  <CurrencyIcon>
                    <CurrencyIconImage src={theme.urls.firmaLogo3} />
                  </CurrencyIcon>
                  <CurrencyTypo>FCT</CurrencyTypo>
                  <DownArrow src={theme.urls.downArrow} />
                </Currency>
                <Value>100</Value>
              </FCTWrapper>
              <SwapIconWrapper>
                <SwapIcon src={theme.urls.exchange} />
              </SwapIconWrapper>
              <OSMOWrapper>
                <Currency>
                  <CurrencyIcon>
                    <CurrencyIconImage src={theme.urls.osmosisLogo2} />
                  </CurrencyIcon>
                  <CurrencyTypo>OSMO</CurrencyTypo>
                  <DownArrow src={theme.urls.downArrow} />
                </Currency>
                <Value>{exampleCurrency}</Value>
              </OSMOWrapper>
            </SwapWrapper>
            <SwapInfoWrapper>
              <SwapInfoLeft>1 FCT = {osmoValue} OSMO</SwapInfoLeft>
              <SwapInfoRight>
                Swap Fee <span>{osmoSwapFee}</span>
              </SwapInfoRight>
            </SwapInfoWrapper>
            <SwapButton href={OSMOSIS_SWAP} target={'_blank'} rel={'noopener noreferrer'}>
              SWAP
            </SwapButton>
          </SwapCard>
        </ContentsWrapper>
      </SwapSectionWrapper>
    </SwapSectionContainer>
  );
};

export default React.memo(SwapSection);
