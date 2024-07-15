import styled from 'styled-components';

export const MarqueeImageList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-right: 50px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    gap: 20px;
  }
`;

export const MarqueeImageItem = styled.img`
  width: 100px;
  height: auto;
  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    width: 100px;
  }
`;
