import RootLayout from '@/components/layouts/Root';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default App;
