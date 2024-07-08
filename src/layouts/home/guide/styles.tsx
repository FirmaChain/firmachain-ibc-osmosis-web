import Link from 'next/link';
import styled from 'styled-components';

export const GuideSectionContainer = styled.section`
  width: 100%;
  padding: 100px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    padding: 40px 10px;
  }
`;

export const GuideSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 70px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    margin-bottom: 50px;
  }
`;

export const LabelTypo = styled.div`
  display: flex;
  padding: 4px 20px;
  justify-content: center;
  align-items: center;
  color: #ac3def;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.18px;
  border-radius: 100px;
  border: 2px solid #ac3def;

  margin-bottom: 24px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    margin-bottom: 16px;
  }
`;

export const TitleTypo = styled.div`
  color: #31353a;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font48};
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.48px;
  & > span {
    color: #5e31ff;
  }

  margin-bottom: 20px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    margin-bottom: 10px;
  }
`;

export const DescriptionTypo = styled.div`
  color: #787f87;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.18px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  padding: 80px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.08);

  @media only screen and (max-width: 1300px) {
    height: 1020px;
  }
`;

export const OsmosisExchange = styled.div`
  width: calc(450px * 0.8);
  height: calc(450px * 0.8);
  background-image: url('${({ theme }) => theme.urls.guideLogo}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media only screen and (max-width: 1300px) {
    width: calc(450px * 0.55);
    height: calc(4₩0px * 0.55);
  }
`;

export const Guide1 = styled(Link)`
  position: absolute;
  left: calc(50% - 620px);
  width: calc(150px * 0.8);
  height: calc(150px * 0.8);
  cursor: pointer;
  background-image: url('${({ theme }) => theme.urls.guide1}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  & > div {
    position: absolute;
    bottom: -45px;
  }
`;

export const Guide2 = styled(Link)`
  position: absolute;
  left: calc(50% - 355px);
  top: calc(50% - 182px);
  width: calc(136px * 0.8);
  height: calc(136px * 0.8);
  cursor: pointer;
  background-image: url('${({ theme }) => theme.urls.guide2}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  & > div {
    position: absolute;
    top: 120px;
  }
`;

export const Guide3 = styled(Link)`
  position: absolute;
  left: calc(50% - 355px);
  top: calc(50% + 72px);
  width: calc(136px * 0.8);
  height: calc(136px * 0.8);
  cursor: pointer;
  background-image: url('${({ theme }) => theme.urls.guide3}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  & > div {
    position: absolute;
    bottom: -35px;
  }
`;

export const Guide4 = styled(Link)`
  position: absolute;
  left: calc(50% + 300px);
  width: calc(136px * 0.8);
  height: calc(136px * 0.8);
  cursor: pointer;
  background-image: url('${({ theme }) => theme.urls.guide4}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  & > div {
    position: absolute;
    bottom: -35px;
  }
`;

export const Guide5 = styled(Link)`
  position: absolute;
  left: calc(50% + 500px);
  width: calc(136px * 0.8);
  height: calc(136px * 0.8);
  cursor: pointer;
  background-image: url('${({ theme }) => theme.urls.guide5}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  & > div {
    position: absolute;
    bottom: -55px;
  }
`;

export const GuideLeft = styled.div`
  position: absolute;
  left: calc(50% - 550px);
  width: calc(510px * 0.8);
  height: calc(336px * 0.8);
  background-image: url('${({ theme }) => theme.urls.guideLeft}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const GuideRight = styled.div`
  position: absolute;
  left: calc(50% + 180px);
  width: calc(441px * 0.8);
  height: calc(60px * 0.8);
  background-image: url('${({ theme }) => theme.urls.guideRight}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const PsTypo = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  text-align: right;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.14px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.04);
`;

export const GuideTypo = styled.div`
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.18px;
  text-transform: capitalize;
`;

export const GuideMini1 = styled(Link)`
  position: absolute;
  top: calc(50% - 410px);
  width: calc(150px * 0.6);
  height: calc(150px * 0.6);
  cursor: pointer;
  background-image: url('${({ theme }) => theme.urls.guide1}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  & > div {
    position: absolute;
    bottom: 95px;
  }
`;

export const GuideMini2 = styled(Link)`
  position: absolute;
  top: calc(50% - 240px);
  left: calc(50% - 122px);
  width: calc(136px * 0.6);
  height: calc(136px * 0.6);
  cursor: pointer;
  background-image: url('${({ theme }) => theme.urls.guide2}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  & > div {
    position: absolute;
    bottom: -25px;
  }
`;

export const GuideMini3 = styled(Link)`
  position: absolute;
  top: calc(50% - 240px);
  right: calc(50% - 122px);
  width: calc(136px * 0.6);
  height: calc(136px * 0.6);
  cursor: pointer;
  background-image: url('${({ theme }) => theme.urls.guide3}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  & > div {
    position: absolute;
    bottom: -25px;
  }
`;

export const GuideMini4 = styled(Link)`
  position: absolute;
  top: calc(50% + 160px);
  width: calc(136px * 0.6);
  height: calc(136px * 0.6);
  cursor: pointer;
  background-image: url('${({ theme }) => theme.urls.guide4}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  & > div {
    position: absolute;
    bottom: -25px;
  }
`;

export const GuideMini5 = styled(Link)`
  position: absolute;
  top: calc(50% + 310px);
  width: calc(136px * 0.6);
  height: calc(136px * 0.6);
  cursor: pointer;
  background-image: url('${({ theme }) => theme.urls.guide5}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  & > div {
    position: absolute;
    bottom: -43px;
  }
`;

export const GuideMiniLeft = styled.div`
  position: absolute;
  top: calc(50% - 300px);
  width: calc(510px * 0.5);
  height: calc(336px * 0.5);
  transform: rotate(90deg);

  background-image: url('${({ theme }) => theme.urls.guideLeft}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const GuideMiniRight = styled.div`
  position: absolute;
  top: calc(50% + 200px);
  width: calc(441px * 0.5);
  height: calc(60px * 0.5);

  transform: rotate(90deg);

  background-image: url('${({ theme }) => theme.urls.guideRight}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const GuideMiniTypo = styled.div`
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.18px;
  text-transform: capitalize;
`;
