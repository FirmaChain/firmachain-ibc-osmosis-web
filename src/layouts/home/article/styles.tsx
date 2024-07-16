import Link from 'next/link';
import styled from 'styled-components';

export const ArticleSectionContainer = styled.section`
  width: 100%;
  padding: 100px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobile}) {
    padding: 40px 10px;
  }
`;

export const ArticleSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NewsList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const NewsItem = styled(Link)`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 40px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &:hover > div:nth-child(1):before {
    transform: scale(1.1);
  }
`;

export const NewsImage = styled.div<{ src: string }>`
  width: 100%;
  height: 250px;
  border-radius: 40px 40px 0 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 40px 40px 0 0;
    background-image: url('${({ src }) => src}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: transform 0.3s ease-in-out;
  }
`;

export const NewsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px 30px 40px;
  gap: 40px;
`;

export const NewsTitle = styled.div`
  width: 100%;
  height: 100%;
  font-family: Poppins;
  font-size: ${({ theme }) => theme.sizes.font24};
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -1.12px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NewsDate = styled.div`
  width: 100%;
  font-family: Inter;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -1px;
  color: #888;
`;

export const CustomSliderWrapper = styled.div`
  width: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;
