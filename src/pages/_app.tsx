import { Analytics } from '@vercel/analytics/react';

import RootLayout from '@/components/layouts/Root';
import WithNavigationFooter from '@/components/layouts/WithNavigationFooter';
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
  return <WithNavigationFooter>{page}</WithNavigationFooter>;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? getDefultLayout;

  return getLayout(
    <Provider>
      <RootLayout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
        <Analytics />
      </RootLayout>
    </Provider>
  );
}

export default App;
