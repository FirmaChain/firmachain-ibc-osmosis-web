import React, { useEffect, useRef, useState } from 'react';

import { getOsmosisData } from '@/utils/api';

import Header from '@/layouts/common/header';
import Footer from '@/layouts/common/footer';

import MainSection from '@/layouts/home/main';
import OsmosisSection from '@/layouts/home/osmosis';
import GuideSection from '@/layouts/home/guide';
import PoolSection from '@/layouts/home/pool';
import ArticleSection from '@/layouts/home/article';

import { MainContainer } from '@/styles/home';

const HomePage = () => {
  const [osmosisData, setOsmosisData] = useState<any>({});
  const [isTopSection, setIsTopSection] = useState(false);
  const mainSectionRef = useRef(null);

  useEffect(() => {
    getOsmosisData()
      .then((data) => {
        setOsmosisData(data);
      })
      .catch((e) => {
        console.log(e);
      });

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry.isIntersecting);
        setIsTopSection(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 0px 0px',
      }
    );

    const currentSectionRef = mainSectionRef.current;

    if (currentSectionRef) observer.observe(currentSectionRef);

    return () => {
      if (currentSectionRef) observer.unobserve(currentSectionRef);
    };
  }, []);

  return (
    <MainContainer>
      <Header isTopSection={isTopSection} />
      <MainSection ref={mainSectionRef} />
      <OsmosisSection />
      <GuideSection />
      <PoolSection osmosisData={osmosisData} />
      <ArticleSection />
      <Footer />
    </MainContainer>
  );
};

export default HomePage;
