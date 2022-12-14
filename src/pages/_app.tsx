import { Analytics } from '@vercel/analytics/react';

import RootLayout from '@/components/layouts/Root';
import Provider from '@/providers';

import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/prism.css';
import '@/styles/mdx.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <RootLayout>
        <>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
          <Analytics />
        </>
      </RootLayout>
    </Provider>
  );
}

export default App;
