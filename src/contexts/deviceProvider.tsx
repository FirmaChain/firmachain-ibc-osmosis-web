import { createContext, ReactNode, useEffect, useState } from 'react';

interface IDeviceContext {
  isMobile: boolean;
  isDesktopSub: boolean;
  isLoaded: boolean;
}

interface IProps {
  children: ReactNode;
}

export const DeviceContext = createContext<IDeviceContext | null>(null);

const DeviceProvider = ({ children }: IProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktopSub, setIsDesktopSub] = useState(false);
  const [isLoaded, setLoaded] = useState(true);

  const checkViewport = () => {
    setIsMobile(window.matchMedia('(max-width: 800px)').matches);
    setIsDesktopSub(window.matchMedia('(max-width: 1300px)').matches);
    setLoaded(true);
  };

  useEffect(() => {
    checkViewport();

    window.addEventListener('resize', checkViewport);

    return () => {
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  return <DeviceContext.Provider value={{ isMobile, isDesktopSub, isLoaded }}>{children}</DeviceContext.Provider>;
};

export default DeviceProvider;
