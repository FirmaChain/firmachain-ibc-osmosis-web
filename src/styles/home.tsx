import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  overflow: hidden;
  min-height: calc(var(--vh, 1vh) * 100);
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TopWrapper = styled.div`
  width: 100%;
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaTablet}) {
    margin-top: 70px;
  }
`;
