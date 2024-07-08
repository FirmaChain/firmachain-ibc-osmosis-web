import React from 'react';

import useDevice from '@/hooks/useDevice';
import { GUIDE1, GUIDE2, GUIDE3, GUIDE4, GUIDE5 } from '@/constants/urls';

import { TitleWrapper, LabelTypo, TitleTypo, DescriptionTypo } from '../common/styles';
import {
  ContentsWrapper,
  Guide1,
  Guide2,
  Guide3,
  Guide4,
  Guide5,
  GuideLeft,
  GuideRight,
  GuideMini1,
  GuideMini2,
  GuideMini3,
  GuideMini4,
  GuideMini5,
  GuideMiniLeft,
  GuideMiniRight,
  GuideSectionContainer,
  GuideSectionWrapper,
  GuideTypo,
  OsmosisExchange,
  PsTypo,
  GuideMiniTypo,
} from './styles';

const GuideSection = () => {
  const { isDesktopSub } = useDevice();

  return (
    <GuideSectionContainer>
      <GuideSectionWrapper>
        <TitleWrapper>
          <LabelTypo>GUIDE</LabelTypo>
          <TitleTypo>IBC Usage Guide</TitleTypo>
          <DescriptionTypo>A simple, easy, and datailed guide to connecting FIRMACHAIN and OSMOSIS.</DescriptionTypo>
        </TitleWrapper>
        <ContentsWrapper>
          {isDesktopSub ? (
            <React.Fragment>
              <GuideMiniLeft />
              <GuideMiniRight />
              <GuideMini1 href={GUIDE1} target={'_blank'} rel={'noopener noreferrer'}>
                <GuideMiniTypo>
                  Keplr
                  <br />
                  Settings
                </GuideMiniTypo>
              </GuideMini1>
              <GuideMini2 href={GUIDE2} target={'_blank'} rel={'noopener noreferrer'}>
                <GuideMiniTypo>Deposit</GuideMiniTypo>
              </GuideMini2>
              <GuideMini3 href={GUIDE3} target={'_blank'} rel={'noopener noreferrer'}>
                <GuideMiniTypo>Withdraw</GuideMiniTypo>
              </GuideMini3>
              <GuideMini4 href={GUIDE4} target={'_blank'} rel={'noopener noreferrer'}>
                <GuideMiniTypo>Swap</GuideMiniTypo>
              </GuideMini4>
              <GuideMini5 href={GUIDE5} target={'_blank'} rel={'noopener noreferrer'}>
                <GuideMiniTypo>Liquidity Supply</GuideMiniTypo>
              </GuideMini5>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <GuideLeft />
              <GuideRight />
              <Guide1 href={GUIDE1} target={'_blank'} rel={'noopener noreferrer'}>
                <GuideTypo>
                  Keplr
                  <br />
                  Settings
                </GuideTypo>
              </Guide1>
              <Guide2 href={GUIDE2} target={'_blank'} rel={'noopener noreferrer'}>
                <GuideTypo>Deposit</GuideTypo>
              </Guide2>
              <Guide3 href={GUIDE3} target={'_blank'} rel={'noopener noreferrer'}>
                <GuideTypo>Withdraw</GuideTypo>
              </Guide3>
              <Guide4 href={GUIDE4} target={'_blank'} rel={'noopener noreferrer'}>
                <GuideTypo>Swap</GuideTypo>
              </Guide4>
              <Guide5 href={GUIDE5} target={'_blank'} rel={'noopener noreferrer'}>
                <GuideTypo>Liquidity Supply</GuideTypo>
              </Guide5>
            </React.Fragment>
          )}

          <OsmosisExchange />
          <PsTypo>*IBC transfers are not supported on mobile Keplr.</PsTypo>
        </ContentsWrapper>
      </GuideSectionWrapper>
    </GuideSectionContainer>
  );
};

export default React.memo(GuideSection);
