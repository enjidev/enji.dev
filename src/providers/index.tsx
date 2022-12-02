import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import { MotionConfig as MotionProvider } from 'framer-motion';
import ColorAccentProvider from '@/providers/ColorAccentProvider';

import mdxComponents from '@/components/mdx';

interface ProviderProps {
  children?: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <MotionProvider reducedMotion="user">
      <ThemeProvider attribute="class" disableTransitionOnChange={true}>
        <ColorAccentProvider defaultScheme="violet">
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </ColorAccentProvider>
      </ThemeProvider>
    </MotionProvider>
  );
};

export default Provider;
