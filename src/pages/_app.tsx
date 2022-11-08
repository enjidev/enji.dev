import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import RootLayout from '@/components/layouts/Root';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
