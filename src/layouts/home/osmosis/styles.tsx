import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const OsmosisSectionContainer = styled.section`
  width: 100%;
  padding: 100px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    padding: 40px 10px;
  }
`;

export const OsmosisSectionWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OsmosisBg = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  width: 1358px;
  height: 1358px;
  background-image: url('${({ theme }) => theme.urls.introBg}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
`;

export const OsomosisIcon = styled.div`
  z-index: 2;
  width: 140px;
  height: 140px;
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: #211666;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    margin-top: 60px;
    width: 110px;
    height: 110px;
  }
`;

export const OsmosisImage = styled.div`
  width: calc(110px);
  height: calc(110px);
  margin-right: 4px;
  background-image: url('${({ theme }) => theme.urls.osmosisLogo2}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    width: 80px;
    height: 80px;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  max-width: 980px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    margin-top: 50px;
  }
`;

export const TitleTypo = styled.div`
  color: #31353a;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font44};
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.44px;
  text-transform: uppercase;

  margin-bottom: 30px;

  & > span {
    background: linear-gradient(104deg, #fff -13.25%, #5000dc 38.9%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    text-align: center;
  }
`;

export const Description = styled.div`
  display: flex;
  padding: 0 50px;
  color: #5f656d;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font20};
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.2px;

  margin-bottom: 50px;
`;

export const ConnectButton = styled.div`
  z-index: 3;
  display: flex;
  padding: 16px 28px 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font20};
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.2px;

  border-radius: 100px;
  background: linear-gradient(104deg, #fff -13.25%, #5000dc 38.9%),
    linear-gradient(94deg, #21bdfc 14.98%, #5e31ff 103.16%);
  backdrop-filter: blur(10px);
`;

export const KeplrIcon = styled(ReactSVG as any)`
  width: 24px;
  height: 24px;

  div {
    line-height: 0;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const LinkList = styled.div`
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 100px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    flex-direction: column;
    gap: 20px;
    margin-top: 60px;
  }
`;

export const LinkItem = styled(Link)`
  padding: 34px 16px 34px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 24px;
  border: 1px solid #8a86ff;
  background: #fff;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.08);

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    width: 100%;
    padding: 20px;
  }
`;

export const LinkIcon = styled.div`
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #5e31ff;
`;

export const LinkIconImage = styled(ReactSVG as any)`
  width: 28px;
  height: 28px;

  div {
    line-height: 0;
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const LinkWrapper = styled.div`
  width: 100%;
  flex: 1;
  padding: 0 30px 0 20px;
`;

export const LinkTitle = styled.div`
  color: #31353a;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font24};
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.24px;
`;

export const LinkDescription = styled.div`
  color: #5f656d;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.16px;
`;

export const RightArrow = styled(ReactSVG as any)`
  width: calc(18px * 1.5);
  height: calc(9px * 1.5);

  div {
    line-height: 0;
    svg {
      width: calc(18px * 1.5);
      height: calc(9px * 1.5);
    }
  }
`;
