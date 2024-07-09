import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  z-index: 3;

  .slick-list {
    padding: 0;
    padding-bottom: 20px;
  }

  .slick-slide {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .slick-dots {
    .slick-active {
      button::before {
        font-size: ${({ theme }) => theme.sizes.font14};
        content: '•';
        color: #000000aa;
      }
    }
    button::before {
      font-size: ${({ theme }) => theme.sizes.font14};
      content: '•';
      color: #00000050;
    }
  }
`;
