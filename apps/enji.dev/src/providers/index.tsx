import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';

import mdxCustomComponents from '@/components/mdx/custom-components';
import ColorAccentProvider from '@/providers/ColorAccentProvider';
import FramerMotionProvider from '@/providers/FramerMotionProvider';

import type { PropsWithChildren } from 'react';

function Provider({ children = null }: PropsWithChildren) {
  return (
    <FramerMotionProvider>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ColorAccentProvider defaultScheme="violet">
          <MDXProvider components={mdxCustomComponents}>{children}</MDXProvider>
        </ColorAccentProvider>
      </ThemeProvider>
    </FramerMotionProvider>
  );
}

export default Provider;
