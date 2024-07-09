import React, { useCallback, useImperativeHandle, useRef } from 'react';
import Slider from 'react-slick';

import { SliderContainer } from './styles';

interface IProps {
  autoplay?: boolean;
  infinite?: boolean;
  dots?: boolean;
  swipe?: boolean;
  slidesToShow?: number;
  customSlideCount?: number | null;
  getActiveIndex?: (index: number) => void;
  rows?: number;
  children: React.ReactNode;
}

const CustomSlider = React.forwardRef(
  (
    {
      autoplay = false,
      infinite = true,
      dots = true,
      swipe = true,
      slidesToShow = 1,
      rows = 1,
      customSlideCount = null,
      getActiveIndex,
      children,
    }: IProps,
    ref: React.Ref<any>
  ) => {
    const sliderRef = useRef<any>();

    const handleActiveIndex = useCallback((index: number) => getActiveIndex && getActiveIndex(index), [getActiveIndex]);

    const slickNext = () => {
      sliderRef && sliderRef.current && sliderRef.current.slickNext();
    };

    const slickPrev = () => {
      sliderRef && sliderRef.current && sliderRef.current.slickPrev();
    };

    useImperativeHandle(ref, () => ({
      slickNext,
      slickPrev,
    }));

    const Settings = {
      autoplay,
      infinite,
      autoplaySpeed: 5000,
      pauseOnFocus: true,
      pauseOnHover: true,
      focusOnSelect: false,
      dots,
      touchMove: true,
      swipe,
      swipeToSlide: true,
      speed: 250,
      slidesToShow,
      rows,
      slidesToScroll: customSlideCount ? customSlideCount : slidesToShow,
      touchThreshold: 100,
      arrows: false,
      waitForAnimate: false,
      lazyLoad: 'progressive',
    };

    return (
      <SliderContainer>
        <Slider
          {...Settings}
          lazyLoad={'progressive'}
          ref={sliderRef}
          afterChange={(index) => handleActiveIndex(index)}
        >
          {children}
        </Slider>
      </SliderContainer>
    );
  }
);

CustomSlider.displayName = 'CustomSlider';

export default React.memo(CustomSlider);
