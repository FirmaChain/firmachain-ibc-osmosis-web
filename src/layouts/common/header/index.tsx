import React, { useEffect, useState } from 'react';

import useTheme from '@/hooks/useTheme';
import { ConnectKeplr } from '@/utils/common';

import {
  HeaderButton,
  HeaderButtonTypo,
  HeaderButtonWrapper,
  HeaderContainer,
  HeaderLogo,
  HeaderWrapper,
} from './styles';

const Header = () => {
  const { theme } = useTheme();

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLogo src={theme.urls.firmaLogo} />
        <HeaderButtonWrapper>
          <HeaderButton onClick={() => ConnectKeplr()}>
            <HeaderButtonTypo>Keplr Connect</HeaderButtonTypo>
          </HeaderButton>
        </HeaderButtonWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default React.memo(Header);
