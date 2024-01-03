import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface ColorAccentProviderProps {
  defaultScheme?: 'violet' | 'blue';
  children: JSX.Element;
}

function ColorAccentProvider({
  defaultScheme = 'violet',
  children,
}: ColorAccentProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', defaultScheme);

    if (pathname.includes('/work/')) {
      document.documentElement.setAttribute('data-accent', 'blue');
    }
  }, [pathname, defaultScheme]);

  return children;
}

export default ColorAccentProvider;
