import { createContext, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import useDevice from '@/hooks/useDevice';

import theme from '../themes';
import sizeDesktop from '../themes/sizeDesktop';
import sizeMobile from '../themes/sizeMobile';

interface IThemeContext {
  theme: typeof theme;
  isLoaded: boolean;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { isMobile, isLoaded } = useDevice();

  const [isThemeLoaded, setThemeLoaded] = useState(false);
  const [themeMode, setThemeMode] = useState<any>(theme);

  useEffect(() => {
    const targetTheme = { ...theme };
    targetTheme.sizes = isMobile ? sizeMobile : sizeDesktop;

    setThemeMode(targetTheme);

    if (isLoaded) setThemeLoaded(true);
  }, [isMobile, isLoaded, theme]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeContext.Provider value={{ theme: themeMode, isLoaded: isThemeLoaded }}>
      <StyledThemeProvider theme={themeMode}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
