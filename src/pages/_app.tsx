import { Analytics } from '@vercel/analytics/react';

import RootLayout from '@/components/layouts/Root';
import Provider from '@/providers';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

import '@/styles/globals.css';
import '@/styles/prism.css';
import '@/styles/mdx.css';

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function getDefultLayout(page: ReactElement): ReactNode {
  return (
    <Provider>
      <RootLayout>
        <>
          {page}
          <Analytics />
        </>
      </RootLayout>
    </Provider>
  );
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? getDefultLayout;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return getLayout(<Component {...pageProps} />);
}

export default App;
