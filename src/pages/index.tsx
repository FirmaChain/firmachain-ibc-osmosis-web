import { useEffect, useState } from 'react';

import { getOsmosisData } from '@/utils/api';

import Header from '@/layouts/common/header';
import Footer from '@/layouts/common/footer';

import MainSection from '@/layouts/home/main';
import OsmosisSection from '@/layouts/home/osmosis';
import GuideSection from '@/layouts/home/guide';
import PoolSection from '@/layouts/home/pool';
import SwapSection from '@/layouts/home/swap';
import ArticleSection from '@/layouts/home/article';

import { MainContainer } from '@/styles/home';

const HomePage = () => {
  const [osmosisData, setOsmosisData] = useState<any>({});

  useEffect(() => {
    getOsmosisData()
      .then((data) => {
        setOsmosisData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <MainContainer>
      <Header />
      <MainSection />
      <OsmosisSection />
      <GuideSection />
      <PoolSection osmosisData={osmosisData} />
      <SwapSection osmosisData={osmosisData} />
      <ArticleSection />
      <Footer />
    </MainContainer>
  );
};

export default HomePage;
