import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import { MotionConfig } from 'framer-motion';
import ColorSchemeProvider from '@/providers/ColorSchemeProvider';
import RootLayout from '@/components/layouts/Root';
import { Analytics } from '@vercel/analytics/react';
import mdxComponents from '@/components/mdx';

import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/schemes.css';
import '@/styles/prism.css';
import '@/styles/mdx.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider attribute="class" disableTransitionOnChange={true}>
        <ColorSchemeProvider defaultScheme="violet">
          <RootLayout>
            <MDXProvider components={mdxComponents}>
              <>
                <Component {...pageProps} />
                <Analytics />
              </>
            </MDXProvider>
          </RootLayout>
        </ColorSchemeProvider>
      </ThemeProvider>
    </MotionConfig>
  );
}

export default App;
