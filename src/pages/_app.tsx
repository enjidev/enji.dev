import { ThemeProvider } from 'next-themes';
import { MotionConfig } from 'framer-motion';
import RootLayout from '@/components/layouts/Root';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider attribute="class">
        <RootLayout>
          <>
            <Component {...pageProps} />
            <Analytics />
          </>
        </RootLayout>
      </ThemeProvider>
    </MotionConfig>
  );
}

export default App;
