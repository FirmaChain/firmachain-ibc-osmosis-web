import React from 'react';

import { TitleWrapper, LabelTypo, TitleTypo, DescriptionTypo } from '../common/styles';
import { ContentsWrapper, PoolSectionContainer, PoolSectionWrapper } from './styles';

const PoolSection = () => {
  return (
    <PoolSectionContainer>
      <PoolSectionWrapper>
        <TitleWrapper>
          <LabelTypo>POOLS</LabelTypo>
          <TitleTypo>
            FIRMACHAIN <span>ON</span> OSMOSIS
          </TitleTypo>
          <DescriptionTypo>Explore active liquidity pools for FIRMACHAIN on OSMOSIS.</DescriptionTypo>
        </TitleWrapper>
        <ContentsWrapper></ContentsWrapper>
      </PoolSectionWrapper>
    </PoolSectionContainer>
  );
};

export default React.memo(PoolSection);
