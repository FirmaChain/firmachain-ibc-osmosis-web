import styled from 'styled-components';

export const PoolSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PoolSectionWrapper = styled.div`
  width: calc(100% - 48px - 48px);
  padding: 100px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: radial-gradient(73.41% 96.57% at 50% 0%, rgba(94, 49, 255, 0.03) 0%, rgba(94, 49, 255, 0.16) 100%);

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    padding: 40px 20px;
    width: calc(100% - 20px);
  }
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    height: auto;
  }
`;

export const TabList = styled.div`
  display: flex;
  padding: 6px;
  align-items: center;
  border-radius: 100px;
  background: #fff;
  margin-bottom: 60px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    margin-bottom: 20px;
  }
`;

export const TabItem = styled.div<{ $active: boolean }>`
  display: flex;
  width: 184px;
  padding: 8px 60px 9px 60px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: ${({ $active }) => ($active ? '#fff' : 'rgba(94, 49, 255, 0.30)')};
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font24};
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.24px;

  ${({ $active }) =>
    $active &&
    'background:linear-gradient(90deg, #ac3def 0%, #5e31ff 100%);box-shadow: 0px 0px 5px 0px rgba(39, 0, 179, 0.5);'};
  border-radius: 100px;
`;
