import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { SEO_DEFAULT } from '../seo.config';

import useViewport from '@/hooks/useViewport';
import DeviceProvider from '@/contexts/deviceProvider';
import ThemeProvider from '@/contexts/themeProvider';

import '../styles/reset.css';
import '../styles/normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useViewport();

  return (
    <DeviceProvider>
      <ThemeProvider>
        <DefaultSeo {...SEO_DEFAULT} />
        <Component {...pageProps} />
      </ThemeProvider>
    </DeviceProvider>
  );
};

export default MyApp;
