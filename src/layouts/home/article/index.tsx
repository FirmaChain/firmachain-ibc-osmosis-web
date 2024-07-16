import React, { useEffect, useRef, useState } from 'react';

import useDevice from '@/hooks/useDevice';
import { getMediumList } from '@/utils/api';
import { convertDate } from '@/utils/common';
import { INewsProps } from '@/interfaces/article';
import CustomSlider from '@/components/customSlider';

import { DescriptionTypo, LabelTypo, TitleTypo, TitleWrapper } from '../common/styles';
import {
  ArticleSectionContainer,
  ArticleSectionWrapper,
  ContentsWrapper,
  CustomSliderWrapper,
  NewsDate,
  NewsImage,
  NewsItem,
  NewsList,
  NewsTitle,
  NewsWrapper,
} from './styles';

const ArticleSection = () => {
  const { isMobile } = useDevice();
  const [newsList, setNewsList] = useState<Array<INewsProps>>([]);
  const sliderRef = useRef<any>();

  const getNews = async () => {
    try {
      const response = await getMediumList();
      const data = response.data.items;
      const regex = /<img.*?src="(.*?)"/;

      let list: Array<INewsProps> = data
        .filter((_item: any, index: number) => index <= 2)
        .map((item: any) => {
          const matches = regex.exec(item.description);
          const thumbnail = matches && matches[1];

          return {
            title: item.title,
            author: item.author,
            date: item.pubDate,
            url: item.link,
            image: thumbnail,
          };
        });

      setNewsList(list);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNews()
      .then(() => {})
      .catch((e) => console.log(e));
  }, []);

  return (
    <ArticleSectionContainer>
      <ArticleSectionWrapper>
        <TitleWrapper>
          <LabelTypo>ARTICLE</LabelTypo>
          <TitleTypo>Ecosystem Discover</TitleTypo>
          <DescriptionTypo>Deep Dive into FIRMACHAIN and OSMOSIS Collaboration.</DescriptionTypo>
        </TitleWrapper>
        <ContentsWrapper>
          {isMobile ? (
            <CustomSliderWrapper>
              <CustomSlider slidesToShow={1} dots={true} ref={sliderRef}>
                {newsList.map((news, index) => (
                  <NewsItem key={index} href={news.url} target={'_blank'} rel={'noopener noreferrer'}>
                    <NewsImage src={news.image} />
                    <NewsWrapper>
                      <NewsTitle>{news.title}</NewsTitle>
                      <NewsDate>{convertDate(news.date)}</NewsDate>
                    </NewsWrapper>
                  </NewsItem>
                ))}
              </CustomSlider>
            </CustomSliderWrapper>
          ) : (
            <NewsList>
              {newsList.map((news, index) => (
                <NewsItem key={index} href={news.url} target={'_blank'} rel={'noopener noreferrer'}>
                  <NewsImage src={news.image} />
                  <NewsWrapper>
                    <NewsTitle>{news.title}</NewsTitle>
                    <NewsDate>{convertDate(news.date)}</NewsDate>
                  </NewsWrapper>
                </NewsItem>
              ))}
            </NewsList>
          )}
        </ContentsWrapper>
      </ArticleSectionWrapper>
    </ArticleSectionContainer>
  );
};

export default React.memo(ArticleSection);
