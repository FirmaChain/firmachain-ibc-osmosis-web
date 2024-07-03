import React from 'react';

import useTheme from '@/hooks/useTheme';

import {
  CollaborationX,
  FirmaLogo,
  MainSectionContainer,
  MainSectionDescription,
  MainSectionLabel,
  MainSectionTitle,
  MainSectionWrapper,
  OsmosisLogo,
} from './styles';

const MainSection = () => {
  const { theme } = useTheme();

  return (
    <MainSectionContainer>
      <MainSectionWrapper>
        <MainSectionLabel>
          <FirmaLogo src={theme.urls.firmaLogo2} />
          <CollaborationX src={theme.urls.collaborationX} />
          <OsmosisLogo src={theme.urls.osmosisLogo} />
        </MainSectionLabel>
        <MainSectionTitle>
          <div>Ecosystem</div>
          <div>Expansion</div>
        </MainSectionTitle>
        <MainSectionDescription>Empowering FIRMACHAIN and OSMOSIS with IBC Technology.</MainSectionDescription>
      </MainSectionWrapper>
    </MainSectionContainer>
  );
};

export default React.memo(MainSection);
