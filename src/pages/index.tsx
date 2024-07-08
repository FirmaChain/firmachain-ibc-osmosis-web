import Header from '@/layouts/common/header';
import Footer from '@/layouts/common/footer';

import MainSection from '@/layouts/home/main';
import OsmosisSection from '@/layouts/home/osmosis';
import GuideSection from '@/layouts/home/guide';

import { MainContainer } from '@/styles/home';

const HomePage = () => {
  return (
    <MainContainer>
      <Header />
      <MainSection />
      <OsmosisSection />
      <GuideSection />
      <Footer />
    </MainContainer>
  );
};

export default HomePage;
