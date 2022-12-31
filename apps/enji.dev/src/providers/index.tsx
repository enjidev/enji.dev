import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';

import mdxComponents from '@/components/mdx';
import ColorAccentProvider from '@/providers/ColorAccentProvider';
import FramerMotionProvider from '@/providers/FramerMotionProvider';

import type { PropsWithChildren } from 'react';

function Provider({ children = null }: PropsWithChildren) {
  return (
    <FramerMotionProvider>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ColorAccentProvider defaultScheme="violet">
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </ColorAccentProvider>
      </ThemeProvider>
    </FramerMotionProvider>
  );
}

export default Provider;
