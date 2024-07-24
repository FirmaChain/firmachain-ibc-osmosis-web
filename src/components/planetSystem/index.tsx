import React from 'react';
import { Planet, Container, PlanetBg, PlanetFirma } from './styles';

interface PlanetProps {
  src: string;
  width: number;
  height: number;
  diameter: number;
  speed: number;
  startAngle: number;
}

const PlanetSystem = ({ planets }: { planets: PlanetProps[] }) => {
  return (
    <Container>
      <PlanetBg />
      <PlanetFirma />
      {planets.map((planet, index) => (
        <Planet
          key={index}
          $src={planet.src}
          $width={planet.width}
          $height={planet.height}
          $diameter={planet.diameter}
          $speed={planet.speed}
          $startAngle={planet.startAngle}
        />
      ))}
    </Container>
  );
};

export default PlanetSystem;
