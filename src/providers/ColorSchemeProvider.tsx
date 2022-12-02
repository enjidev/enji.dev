import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface ColorSchemeProviderProps {
  defaultScheme?: 'violet' | 'blue';
  children?: React.ReactNode;
}

const ColorSchemeProvider = ({
  defaultScheme = 'violet',
  children,
}: ColorSchemeProviderProps) => {
  const { pathname } = useRouter();

  useEffect(() => {
    document.documentElement.setAttribute('data-scheme', defaultScheme);

    if (pathname.includes('/work/')) {
      document.documentElement.setAttribute('data-scheme', 'blue');
    }
  }, [pathname, defaultScheme]);

  return <>{children}</>;
};

export default ColorSchemeProvider;
