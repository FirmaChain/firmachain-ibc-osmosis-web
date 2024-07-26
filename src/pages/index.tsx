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
  const [isOsmosisVisible, setIsOsmosisVisible] = useState(false);
  const osmosisSectionRef = useRef(null);

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
        setIsOsmosisVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-10% 0px 0px 0px',
      }
    );

    if (osmosisSectionRef.current) {
      observer.observe(osmosisSectionRef.current);
    }

    return () => {
      if (osmosisSectionRef.current) {
        observer.unobserve(osmosisSectionRef.current);
      }
    };
  }, []);

  return (
    <MainContainer>
      <Header />
      <MainSection />
      <OsmosisSection ref={osmosisSectionRef} />
      <GuideSection />
      <PoolSection osmosisData={osmosisData} />
      <ArticleSection />
      <Footer />
    </MainContainer>
  );
};

export default HomePage;
