import React from 'react';
import Link from 'next/link';

import useTheme from '@/hooks/useTheme';
import { EXPLORER, MEDIUM, OFFICIAL, STATION, TELEGRAM, TWITTER } from '@/constants/urls';

import {
  Copyright,
  FooterBottom,
  FooterContainer,
  FooterLogo,
  FooterTop,
  FooterWrapper,
  LinkIcon,
  LinkItem,
  LinkList,
  LinkTypo,
  SocialIcon,
  SocialItem,
  SocialList,
} from './styles';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <LinkList>
            <LinkItem href={OFFICIAL} target={'_blank'} rel={'noopener noreferrer'}>
              <LinkTypo>FIRMACHAIN</LinkTypo>
              <LinkIcon src={theme.urls.external} />
            </LinkItem>

            <LinkItem href={STATION} target={'_blank'} rel={'noopener noreferrer'}>
              <LinkTypo>Firma station</LinkTypo>
              <LinkIcon src={theme.urls.external} />
            </LinkItem>

            <LinkItem href={EXPLORER} target={'_blank'} rel={'noopener noreferrer'}>
              <LinkTypo>Block Explorer</LinkTypo>
              <LinkIcon src={theme.urls.external} />
            </LinkItem>
          </LinkList>
          <SocialList>
            <SocialItem href={MEDIUM} target={'_blank'} rel={'noopener noreferrer'}>
              <SocialIcon src={theme.urls.socialMedium} />
            </SocialItem>
            <SocialItem href={TWITTER} target={'_blank'} rel={'noopener noreferrer'}>
              <SocialIcon src={theme.urls.socialTwitter} />
            </SocialItem>
            <SocialItem href={TELEGRAM} target={'_blank'} rel={'noopener noreferrer'}>
              <SocialIcon src={theme.urls.socialTelegram} />
            </SocialItem>
          </SocialList>
        </FooterTop>
        <FooterBottom>
          <Link href={OFFICIAL} target={'_blank'} rel={'noopener noreferrer'}>
            <FooterLogo src={theme.urls.firmaLogo2} />
          </Link>
          <Copyright>Copyright © 2024 FIRMACHAIN. All Rights Reserved.</Copyright>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default React.memo(Footer);
