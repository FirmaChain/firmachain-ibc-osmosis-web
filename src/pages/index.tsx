import Header from '@/layouts/common/header';
import Footer from '@/layouts/common/footer';

import MainSection from '@/layouts/home/main';
import OsmosisSection from '@/layouts/home/osmosis';

import { MainContainer } from '@/styles/home';

const HomePage = () => {
  return (
    <MainContainer>
      <Header />
      <MainSection />
      <OsmosisSection />
      <Footer />
    </MainContainer>
  );
};

export default HomePage;
