import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const MainSectionContainer = styled.section`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  min-height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url('${({ theme }) => theme.urls.mainSectionBg}');
  background-repeat: repeat;
  background-size: contain;
  background-position: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    max-height: 800px;
  }
`;

export const MainSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    padding: 0 20px;
  }
`;

export const MainSectionLabel = styled.div`
  margin-bottom: 72px;
  display: flex;
  padding: 16px 32px;
  gap: 12px;
  align-items: center;
  border-radius: 100px;
  border: 2px solid #7f44e6;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    margin-bottom: 30px;
    padding: 12px;
  }
`;

export const FirmaLogo = styled(ReactSVG)`
  width: 201px;
  height: 34px;

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

export const CollaborationX = styled(ReactSVG)`
  width: 18px;
  height: 18px;

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

export const OsmosisLogo = styled(ReactSVG)`
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

  background: radial-gradient(106.08% 173.44% at 32.4% -19.64%, #fff 0%, #5000dc 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-bottom: 56px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    margin-bottom: 20px;
  }
`;

export const MainSectionDescription = styled.div`
  color: #a175ed;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font26};
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
`;
