import React from 'react';

import useTheme from '@/hooks/useTheme';
import useDevice from '@/hooks/useDevice';

import { ConnectKeplr } from '@/utils/common';

import {
  HeaderButton,
  HeaderButtonTypo,
  HeaderButtonWrapper,
  HeaderContainer,
  HeaderLogo,
  HeaderWrapper,
} from './styles';

const Header = ({ isTopSection }: { isTopSection: boolean }) => {
  const { theme } = useTheme();
  const { isMobile } = useDevice();

  return (
    <HeaderContainer>
      <HeaderWrapper $isTopSection={isTopSection}>
        <HeaderLogo src={theme.urls.firmaLogo} />
        <HeaderButtonWrapper>
          <HeaderButton onClick={() => ConnectKeplr()}>
            <HeaderButtonTypo>Connect{isMobile ? ' ' : ' with '}Keplr</HeaderButtonTypo>
          </HeaderButton>
        </HeaderButtonWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default React.memo(Header);
