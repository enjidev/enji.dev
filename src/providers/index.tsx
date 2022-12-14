import { MDXProvider } from '@mdx-js/react';
import { MotionConfig as MotionProvider } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

import mdxComponents from '@/components/mdx';
import ColorAccentProvider from '@/providers/ColorAccentProvider';

import type { PropsWithChildren } from 'react';

function Provider({ children = null }: PropsWithChildren) {
  return (
    <MotionProvider reducedMotion="user">
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ColorAccentProvider defaultScheme="violet">
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </ColorAccentProvider>
      </ThemeProvider>
    </MotionProvider>
  );
}

export default Provider;
