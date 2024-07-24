import { ReactSVG } from 'react-svg';
import styled, { css, keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const dungdung = keyframes`
  0% {
    transform: translateY(0%);
  }
  50%{
    transform: translateY(20%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const MainSectionContainer = styled.section`
  width: 100%;
  height: calc(var(--vh, 1vh) * 170);
  min-height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  position: relative;

  background-image: url('${({ theme }) => theme.urls.mainSectionBg}');
  background-repeat: repeat;
  background-size: contain;
  background-position: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    max-height: 800px;
  }
  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaQHDWidth}) {
    height: calc(var(--vh, 1vh) * 137);
  }
`;

export const MainSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 140px;

  #tsparticles {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    z-index: 0;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    padding: 0 20px;
  }
`;

export const MainSectionLabel = styled.div`
  margin-bottom: 60px;
  display: flex;
  padding: 14px 32px;
  gap: 12px;
  align-items: center;
  border-radius: 100px;
  border: 2px solid #7f44e6;
  z-index: 10;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    margin-bottom: 30px;
    padding: 12px;
  }
`;

export const FirmaLogo = styled(ReactSVG as any)`
  width: 201px;
  height: 34px;
  z-index: 10;

  div {
    line-height: 0;
    svg {
      width: 201px;
      height: 34px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    width: calc(201px * 0.6);
    height: calc(34px * 0.6);
    & > div > svg {
      width: calc(201px * 0.6);
      height: calc(34px * 0.6);
    }
  }
`;

export const CollaborationX = styled(ReactSVG as any)`
  width: 18px;
  height: 18px;
  z-index: 10;

  div {
    line-height: 0;
    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    width: calc(18px * 0.6);
    height: calc(18px * 0.6);
    & > div > svg {
      width: calc(18px * 0.6);
      height: calc(18px * 0.6);
    }
  }
`;

export const OsmosisLogo = styled(ReactSVG as any)`
  width: 156px;
  height: 34px;

  div {
    line-height: 0;
    svg {
      width: 156px;
      height: 34px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    width: calc(156px * 0.6);
    height: calc(34px * 0.6);
    & > div > svg {
      width: calc(156px * 0.6);
      height: calc(34px * 0.6);
    }
  }
`;

export const MainSectionTitle = styled.div`
  text-align: center;
  text-edge: cap;
  font-family: 'Poppins';
  font-size: ${({ theme }) => theme.sizes.font100};
  font-weight: 800;
  line-height: 104%;
  text-transform: uppercase;
  z-index: 10;

  background: radial-gradient(106.08% 173.44% at 32.4% -19.64%, #fff 0%, #5000dc 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-bottom: 40px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    margin-bottom: 20px;
  }
`;

export const MainSectionDescription = styled.div`
  z-index: 10;
  color: #a175ed;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font26};
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
`;

export const PlanetWrapper = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 970px;
`;

export const PlanetTypoWrapper = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 910px;
  dispaly: flex;
  flex-direction: column;
  ${({ $visible }) =>
    $visible
      ? css`
          animation: ${fadeInUp} 1s forwards;
        `
      : css`
          opacity: 0;
          transform: translateY(20px);
        `}
`;

export const PlanetTitle = styled.div`
  text-align: center;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.6);
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font56};
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.56px;
  background: linear-gradient(92deg, #fff 7.58%, #a991ff 126.16%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PlanetDescription = styled.div`
  text-align: center;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.6);
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font32};
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.32px;
  background: linear-gradient(92deg, #fff 7.58%, #a991ff 126.16%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const DownArrow = styled.div`
  width: calc(20px * 1.5);
  height: calc(16px * 1.5);
  position: absolute;
  bottom: 30px;
  z-index: 20;
  background-image: url('${({ theme }) => theme.urls.downArrow2}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  animation-duration: 2s;
  animation-delay: 0.4s;
  animation-timing-function: linear;
  animation-name: ${dungdung};
  animation-iteration-count: infinite;
`;
