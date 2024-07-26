import React from 'react';

import { IOsmosisData } from '@/utils/api';
import Pool from './pool';
import Swap from './swap';

import { TitleWrapper, LabelTypo, TitleTypo, DescriptionTypo } from '../common/styles';
import { ContentsWrapper, PoolSectionContainer, PoolSectionWrapper, TabList, TabItem } from './styles';

const PoolSection = ({ osmosisData }: { osmosisData: IOsmosisData | null }) => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <PoolSectionContainer>
      <PoolSectionWrapper>
        <TitleWrapper>
          <LabelTypo>POOLS</LabelTypo>
          <TitleTypo>
            FIRMACHAIN <span>on</span> OSMOSIS
          </TitleTypo>
          <DescriptionTypo>Explore active liquidity pools for FIRMACHAIN on OSMOSIS.</DescriptionTypo>
        </TitleWrapper>
        <ContentsWrapper>
          <TabList>
            <TabItem $active={tabIndex === 0} onClick={() => setTabIndex(0)}>
              Pools
            </TabItem>
            <TabItem $active={tabIndex === 1} onClick={() => setTabIndex(1)}>
              Swap
            </TabItem>
          </TabList>
          {tabIndex === 0 && <Pool osmosisData={osmosisData} />}
          {tabIndex === 1 && <Swap osmosisData={osmosisData} />}
        </ContentsWrapper>
      </PoolSectionWrapper>
    </PoolSectionContainer>
  );
};

export default React.memo(PoolSection);
