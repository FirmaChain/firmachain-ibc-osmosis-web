import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import Link from 'next/link';

export const SwapSectionContainer = styled.section`
  width: 100%;
  padding: 100px 30px 120px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    padding: 40px 10px 70px 10px;
  }
`;

export const SwapSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SwapCard = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 620px;
  display: flex;
  padding: 30px 50px 62px 50px;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  border-radius: 24px;
  background: #f8f9fa;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.12);

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    padding: 30px 30px 40px 30px;
  }
`;

export const SwapLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const SwapLogo = styled(ReactSVG as any)`
  width: 24px;
  height: 24px;

  div {
    line-height: 0;
    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    width: 18px;
    height: 18px;
    & > div > svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const SwapTypo = styled.div`
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font24};
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.24px;
  background: linear-gradient(90deg, #8a86ff 0.04%, #e13cbd 99.5%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SwapWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const SwapInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #f4f4f6;
  background: #fff;
`;

export const SwapInfoLeft = styled.div`
  color: #989ea4;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.16px;
`;

export const SwapInfoRight = styled.div`
  color: #787f87;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.14px;
  & > span {
    font-size: ${({ theme }) => theme.sizes.font16};
    font-weight: 600;
  }
`;

export const SwapButton = styled(Link)`
  position: absolute;
  bottom: -32px;

  display: flex;
  padding: 14px 120px;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.2px;
  border-radius: 100px;
  background: linear-gradient(90deg, #8a86ff 0.04%, #e13cbd 99.5%);
  border: 5px solid #fff;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    padding: 14px 80px;
  }
`;

const SwapBaseWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 28px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.16);

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    padding: 20px 20px;
    height: auto;
  }
`;

export const FCTWrapper = styled(SwapBaseWrapper)`
  background: #fff;
  & > div:nth-child(1) > div:nth-child(1) {
    border-radius: 10000px;
    background: #000;
  }
`;

export const OSMOWrapper = styled(SwapBaseWrapper)`
  background: #31353a;

  & > div:nth-child(1) > div {
    color: #fff;
  }
  & > div:nth-child(2) {
    color: #fff;
  }
  & > div:nth-child(1) > div:nth-child(1) {
    border-radius: 10000px;
    background: #fff;
    padding: 2px 3px 1px 1px;
  }
`;

export const SwapIconWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 56px;
  height: 56px;
  padding: 9px 11px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: #c752d1;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    width: 45px;
    height: 45px;
  }
`;

export const SwapIcon = styled(ReactSVG as any)`
  width: 26px;
  height: 17px;

  div {
    line-height: 0;
    svg {
      width: 26px;
      height: 17px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    width: calc(26px * 0.8);
    height: calc(17px * 0.8);
    & > div > svg {
      width: calc(26px * 0.8);
      height: calc(17px * 0.8);
    }
  }
`;

export const Currency = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CurrencyIcon = styled.div`
  width: 24px;
  height: 24px;
  padding: 5px;
`;

export const CurrencyIconImage = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background-image: url('${({ src }) => src}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const CurrencyTypo = styled.div`
  color: #31353a;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font20};
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.2px;
`;

export const DownArrow = styled(ReactSVG as any)`
  width: 12px;
  height: 12px;

  div {
    line-height: 0;
    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const Value = styled.div`
  color: #121416;
  text-align: right;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font22};
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.22px;
`;

export const CoinWrapper = styled.div`
  position: absolute;
  top: 175px;
  z-index: 1;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    display: none;
  }
`;
