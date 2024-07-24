import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import Link from 'next/link';

export const FooterContainer = styled.footer`
  width: calc(100%);
  padding: 0 30px 30px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    padding: 0;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 60px 60px 50px 60px;
  border-radius: 32px;
  background: #121416;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    border-radius: 0;
    padding: 30px 20px;
    gap: 40px;
  }
`;

export const FooterTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    justify-content: center;
    flex-direction: column;
    gap: 30px;
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

export const LinkList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    width: 100%;
    gap: 30px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-bottom: 30px;
    border-bottom: 1px solid #ffffff11;
  }
`;

export const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 5px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    flex: 1;
  }
`;

export const LinkTypo = styled.div`
  color: #989ea4;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
  line-height: 130%;
  text-transform: uppercase;
`;

export const LinkIcon = styled(ReactSVG as any)`
  width: 14px;
  height: 14px;

  div {
    line-height: 0;
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const SocialList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const SocialItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(5px);
`;

export const SocialIcon = styled(ReactSVG as any)`
  width: 20px;
  height: 20px;

  div {
    line-height: 0;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const FooterLogo = styled(ReactSVG as any)`
  width: 152px;
  height: 38px;
  cursor: pointer;
  opacity: 0.5;

  div {
    line-height: 0;
    svg {
      width: 152px;
      height: 38px;
    }
  }
`;

export const Copyright = styled.div`
  color: #5f656d;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.16px;
`;
