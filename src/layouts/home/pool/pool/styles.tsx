import Link from 'next/link';
import styled from 'styled-components';

export const PoolList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const PoolItem = styled.div`
  width: 100%;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: relative;
  padding: 40px 50px 40px 50px;
  border-radius: 40px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    border-radius: 20px;
    padding: 25px 25px 20px 25px;
  }
`;

export const PoolLogo = styled.div<{ $src: string }>`
  width: calc(166px * 0.9);
  height: calc(90px * 0.9);

  background-image: url('${({ $src }) => $src}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    width: calc(166px * 0.7);
    height: calc(90px * 0.7);
    top: -32px;
  }
`;

export const PoolLabel = styled.div`
  display: flex;
  padding: 4px 14px;
  justify-content: center;
  align-items: center;
  color: #787f87;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.14px;
  border-radius: 100px;
  border: 1px solid #787f87;
  background: #fff;
`;

export const PoolTitle = styled.div`
  color: #31353a;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font32};
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.32px;
`;

export const InfoList = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    margin: 10px 0 20px 0;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    flex: 1;
  }
`;

export const InfoLabel = styled.div`
  color: #5f656d;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.14px;
`;

export const InfoValue = styled.div`
  color: #5f656d;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font24};
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.24px;
`;

export const InfoDivider = styled.div`
  width: 1px;
  height: 30px;
  background: rgba(0, 0, 0, 0.1);
`;

export const PoolButton = styled(Link)`
  width: 100%;
  display: flex;
  padding: 16px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font20};
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.2px;
  border-radius: 100px;
  background: #5e31ff;
`;

export const ChartImage = styled.img`
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const CustomSliderWrapper = styled.div`
  width: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const GuageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 10px;
`;

export const GuageCurrencyWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GaugeCurrency = styled.div`
  color: #787f87;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.12px;
`;

export const GuageWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const GuageBackground = styled.div`
  width: 100%;
  height: 12px;
  border-radius: 100px;
  background: #8ecbf7;
`;

export const GuageBar = styled.div<{ $weight: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ $weight }) => $weight};
  height: 12px;
  border-radius: 100px;
  background: #ab94ff;
`;

export const GuageValueWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GuageValue = styled.div`
  color: #5f656d;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.12px;
`;

export const PoolBg = styled.div`
  position: absolute;
  bottom: -200px;
  right: 0;
  width: 400px;
  height: 600px;
  background-image: url('${({ theme }) => theme.urls.poolBg}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const PoolTopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PoolTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;
