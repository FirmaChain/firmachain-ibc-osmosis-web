import React, { useEffect, useState } from 'react';

import useTheme from '@/hooks/useTheme';
import Particle from '@/components/particles';
import PlanetSystem from '@/components/planetSystem';
import theme from '@/themes';

import {
  CollaborationX,
  DownArrow,
  FirmaLogo,
  MainSectionContainer,
  MainSectionDescription,
  MainSectionLabel,
  MainSectionTitle,
  MainSectionWrapper,
  OsmosisLogo,
  PlanetDescription,
  PlanetTitle,
  PlanetTypoWrapper,
  PlanetWrapper,
} from './styles';

const planets = [
  { src: theme.urls.planet1, width: 40, height: 40, diameter: 34.8, speed: 150, startAngle: 70 },
  { src: theme.urls.planet2, width: 50, height: 50, diameter: 47.4, speed: 150, startAngle: 180 },
  { src: theme.urls.planet3, width: 60, height: 60, diameter: 60.6, speed: 150, startAngle: 340 },
];

const MainSection = () => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MainSectionContainer>
      <MainSectionWrapper>
        <Particle />
        <MainSectionLabel>
          <FirmaLogo src={theme.urls.firmaLogo2} />
          <CollaborationX src={theme.urls.collaborationX} />
          <OsmosisLogo src={theme.urls.osmosisLogo} />
        </MainSectionLabel>
        <PlanetWrapper>
          <PlanetSystem planets={planets} />
        </PlanetWrapper>
        <MainSectionTitle>
          <div>Ecosystem</div>
          <div>Expansion</div>
        </MainSectionTitle>
        <MainSectionDescription>Empowering FIRMACHAIN and OSMOSIS with IBC Technology.</MainSectionDescription>
        <PlanetTypoWrapper $visible={visible}>
          <PlanetTitle>Unlimited Connections</PlanetTitle>
          <PlanetDescription>Leveraging IBC for FIRMACHAIN and OSMOSIS</PlanetDescription>
        </PlanetTypoWrapper>
      </MainSectionWrapper>
      <DownArrow />
    </MainSectionContainer>
  );
};

export default React.memo(MainSection);
