import styled, { keyframes, css } from 'styled-components';

const rotate = (diameter: number, startAngle: number) => keyframes`
  0% {
    transform: rotate(${startAngle}deg) translateX(calc(min(${diameter}vw, 1500px) / 2)) rotate(-${startAngle}deg);
  }
  100% {
    transform: rotate(${startAngle + 360}deg) translateX(calc(min(${diameter}vw, 1500px) / 2)) rotate(-${
  startAngle + 360
}deg);
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
`;

export const Planet = styled.div<{
  $src: string;
  $diameter: number;
  $speed: number;
  $width: number;
  $height: number;
  $startAngle: number;
}>`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: calc(-${({ $width }) => $width}px / 2);
  margin-top: calc(-${({ $height }) => $height}px / 2);
  transform-origin: calc(min(${({ $diameter }) => $diameter}vw, 1500px) / 2) center;
  animation: ${({ $diameter, $startAngle }) => rotate($diameter, $startAngle)} ${({ $speed }) => $speed}s linear
    infinite;

  background-image: url('${({ $src }) => $src}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const PlanetBg = styled.div`
  position: absolute;
  width: 80vw;
  height: 80vw;
  min-width: 1000px;
  min-height: 1000px;
  max-width: 2000px;
  max-height: 2000px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url('${({ theme }) => theme.urls.planetBg}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const PlanetFirma = styled.div`
  position: absolute;
  width: 80vw;
  height: 80vw;
  min-width: 1000px;
  min-height: 1000px;
  max-width: 2000px;
  max-height: 2000px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url('${({ theme }) => theme.urls.planetFirma}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
