import { ThemeProvider } from 'next-themes';
import { MotionConfig } from 'framer-motion';
import RootLayout from '@/components/layouts/Root';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider attribute="class">
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>
    </MotionConfig>
  );
}

export default App;
