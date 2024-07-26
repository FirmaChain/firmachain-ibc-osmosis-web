import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import Link from 'next/link';

export const SwapCardMobile = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  padding: 22px 20px 24px 20px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 24px;
  background: #f8f9fa;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.12);
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

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    gap: 15px;
  }
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
  width: 100%;
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: Inter;
  cursor: pointer;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.2px;
  border-radius: 100px;
  background: linear-gradient(90deg, #8a86ff 0.04%, #e13cbd 99.5%);
  border: 5px solid #fff;
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
  background: #31353a;

  & > div:nth-child(1) > div {
    color: #fff;
  }
  & > div:nth-child(2) {
    color: #fff;
  }
  & > div:nth-child(1) > div:nth-child(1) {
    border-radius: 10000px;
    background: #000;
    padding: 3px 3px 3px 3px;
  }
`;

export const OSMOWrapper = styled(SwapBaseWrapper)`
  background: #fff;
  & > div:nth-child(1) > div:nth-child(1) {
    border-radius: 10000px;
    background: #000;
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
  width: 14px;
  height: 12px;

  div {
    line-height: 0;
    svg {
      width: 14px;
      height: 12px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CurrencyIconImage = styled.div<{ src: string }>`
  width: 15px;
  height: 15px;
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

export const SwapCardDesktop = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 40px;
  border-radius: 40px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
`;

export const FCTPriceWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  background-image: url('${({ theme }) => theme.urls.swapChart}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
`;

export const FCTInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const FCTIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 100px;
`;

export const FCTIcon = styled.div<{ src: string }>`
  width: 24px;
  height: 24px;
  background-image: url('${({ src }) => src}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const FCTChainName = styled.div`
  color: #31353a;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.2px;
`;

export const FCTDenom = styled.div`
  color: #787f87;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.16px;
`;

export const FCTPrice = styled.div`
  width: 100%;

  color: #121416;
  font-family: Inter;
  font-size: 32px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.32px;
`;

export const SwapCardWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 40px 32px 36px 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  border-radius: 40px;
  background: #f4f4f6;

  & > ${SwapInfoWrapper} {
    height: 55px;
  }

  & > ${SwapWrapper} {
    flex-direction: row;

    & > ${OSMOWrapper} {
      flex-direction: column;
      gap: 10px;
      padding: 20px 0;
    }

    & > ${FCTWrapper} {
      flex-direction: column;
      gap: 10px;
      padding: 20px 0;
    }

    & > ${SwapIconWrapper} {
      transform: rotate(90deg);

      div {
        width: calc(14px * 1.5);
        height: calc(12px * 1.5);
      }

      svg {
        width: calc(14px * 1.5);
        height: calc(12px * 1.5);
      }
    }
  }

  & > ${SwapButton} {
    border: 0 !important;
    border-radius: 100px;
    background: linear-gradient(90deg, #6841f2 0.04%, #e13cbd 99.5%);
  }
`;
