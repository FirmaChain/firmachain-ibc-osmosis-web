import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 70px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    margin-bottom: 50px;
  }
`;

export const LabelTypo = styled.div`
  display: flex;
  padding: 4px 20px;
  justify-content: center;
  align-items: center;
  color: #ac3def;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.18px;
  border-radius: 100px;
  border: 2px solid #ac3def;

  margin-bottom: 24px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    margin-bottom: 16px;
  }
`;

export const TitleTypo = styled.div`
  color: #31353a;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font48};
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.48px;
  & > span {
    color: #5e31ff;
  }

  margin-bottom: 20px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    margin-bottom: 10px;
  }
`;

export const DescriptionTypo = styled.div`
  color: #787f87;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.18px;
`;
