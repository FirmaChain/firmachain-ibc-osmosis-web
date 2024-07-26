import React, { useEffect, useMemo, useState } from 'react';

import useTheme from '@/hooks/useTheme';
import useDevice from '@/hooks/useDevice';
import { OSMOSIS_SWAP } from '@/constants/urls';
import { getFCTPrice, IOsmosisData } from '@/utils/api';

import {
  Currency,
  CurrencyIcon,
  CurrencyIconImage,
  CurrencyTypo,
  DownArrow,
  FCTChainName,
  FCTDenom,
  FCTIcon,
  FCTIconWrapper,
  FCTInfoWrapper,
  FCTPrice,
  FCTPriceWrapper,
  FCTWrapper,
  OSMOWrapper,
  SwapButton,
  SwapCardDesktop,
  SwapCardMobile,
  SwapCardWrapper,
  SwapIcon,
  SwapIconWrapper,
  SwapInfoLeft,
  SwapInfoRight,
  SwapInfoWrapper,
  SwapLogo,
  SwapLogoWrapper,
  SwapTypo,
  SwapWrapper,
  Value,
} from './styles';

const Swap = ({ osmosisData }: { osmosisData: IOsmosisData | null }) => {
  const { theme } = useTheme();
  const { isMobile } = useDevice();
  const [fctUSD, setfctUSD] = useState('-');

  useEffect(() => {
    getFCTPrice().then((data) => {
      setfctUSD(data);
    });
  }, []);

  const exampleCurrency = useMemo(() => {
    try {
      if (osmosisData !== null) {
        return (parseFloat(osmosisData.swapData.fctosmo) * 100).toFixed(3);
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
    <React.Fragment>
      {isMobile ? (
        <SwapCardMobile>
          <SwapLogoWrapper>
            <SwapLogo src={theme.urls.osmosisLogo3} />
            <SwapTypo>OSMOSIS SWAP</SwapTypo>
          </SwapLogoWrapper>
          <SwapWrapper>
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
        </SwapCardMobile>
      ) : (
        <SwapCardDesktop>
          <FCTPriceWrapper>
            <FCTInfoWrapper>
              <FCTIconWrapper>
                <FCTIcon src={theme.urls.firmaLogo3} />
              </FCTIconWrapper>
              <FCTChainName>FIRMACHAIN</FCTChainName>
              <FCTDenom>FCT</FCTDenom>
            </FCTInfoWrapper>
            <FCTPrice>$ {fctUSD}</FCTPrice>
          </FCTPriceWrapper>
          <SwapCardWrapper>
            <SwapWrapper>
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
          </SwapCardWrapper>
        </SwapCardDesktop>
      )}
    </React.Fragment>
  );
};

export default React.memo(Swap);
