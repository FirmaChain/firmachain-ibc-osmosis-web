import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  top: 0;
  z-index: 10;
  position: fixed;
  padding: 19px 30px 19px 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    padding: 15px 10px 15px 10px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled(ReactSVG)`
  width: 136px;
  height: 34px;

  div {
    line-height: 0;
    svg {
      width: 136px;
      height: 34px;
    }
  }
`;

export const HeaderButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderButton = styled.div`
  display: flex;
  padding: 8px 20px 9px 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;

  border-radius: 100px;
  border: 2px solid #ac3def;
  background: #121416;
  backdrop-filter: blur(10px);
  cursor: pointer;
`;
export const HeaderButtonTypo = styled.div`
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.14px;
  background: linear-gradient(277deg, #ac3def 5.57%, #5bbaff 124.83%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
