import React, { forwardRef } from 'react';

import useTheme from '@/hooks/useTheme';
import useDevice from '@/hooks/useDevice';
import { ConnectKeplr } from '@/utils/common';
import { GUIDE_GENERAL, OSMOSIS_SWAP, POOL_FCT } from '@/constants/urls';

import {
  Description,
  OsmosisBg,
  OsmosisImage,
  OsmosisSectionContainer,
  OsmosisSectionWrapper,
  OsomosisIcon,
  TitleWrapper,
  TitleTypo,
  ConnectButton,
  KeplrIcon,
  LinkList,
  LinkItem,
  LinkTitle,
  LinkWrapper,
  LinkDescription,
  LinkIcon,
  RightArrow,
  LinkIconImage,
} from './styles';

const OsmosisSection = () => {
  const { theme } = useTheme();
  const { isMobile } = useDevice();

  return (
    <OsmosisSectionContainer>
      <OsmosisSectionWrapper>
        <OsmosisBg />
        <OsomosisIcon>
          <OsmosisImage />
        </OsomosisIcon>
        <TitleWrapper>
          <TitleTypo>
            THE FIRST DEX IN THE{isMobile ? <br /> : ' '}
            <span>COSMOS ECOSYSTEM</span>
          </TitleTypo>
          <Description>
            OSMOSIS, The first DEX in the Cosmos ecosystem, uses IBC for excellent scalability and connects various
            blockchain projects as a liquidity hub.
          </Description>
          <ConnectButton onClick={() => ConnectKeplr()}>
            <KeplrIcon src={theme.urls.keplr} />
            Connect with Keplr
          </ConnectButton>
        </TitleWrapper>

        <LinkList>
          <LinkItem href={OSMOSIS_SWAP} target={'_blank'} rel={'noopener noreferrer'}>
            <LinkIcon>
              <LinkIconImage src={theme.urls.introLink1} />
            </LinkIcon>
            <LinkWrapper>
              <LinkTitle>OSMOSIS</LinkTitle>
              <LinkDescription>OSMOSIS Swap</LinkDescription>
            </LinkWrapper>
            <RightArrow src={theme.urls.rightArrow} />
          </LinkItem>
          <LinkItem href={GUIDE_GENERAL} target={'_blank'} rel={'noopener noreferrer'}>
            <LinkIcon>
              <LinkIconImage src={theme.urls.introLink2} />
            </LinkIcon>
            <LinkWrapper>
              <LinkTitle>Guide Docs</LinkTitle>
              <LinkDescription>OSMOSIS Guide docs</LinkDescription>
            </LinkWrapper>
            <RightArrow src={theme.urls.rightArrow} />
          </LinkItem>
          <LinkItem href={POOL_FCT} target={'_blank'} rel={'noopener noreferrer'}>
            <LinkIcon>
              <LinkIconImage src={theme.urls.introLink3} />
            </LinkIcon>
            <LinkWrapper>
              <LinkTitle>FCT Pools</LinkTitle>
              <LinkDescription>OSMOSIS FCT Pools</LinkDescription>
            </LinkWrapper>
            <RightArrow src={theme.urls.rightArrow} />
          </LinkItem>
        </LinkList>
      </OsmosisSectionWrapper>
    </OsmosisSectionContainer>
  );
};

export default React.memo(OsmosisSection);
