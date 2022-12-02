import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import { MotionConfig as MotionProvider } from 'framer-motion';
import ColorSchemeProvider from '@/providers/ColorSchemeProvider';

import mdxComponents from '@/components/mdx';

interface ProviderProps {
  children?: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <MotionProvider reducedMotion="user">
      <ThemeProvider attribute="class" disableTransitionOnChange={true}>
        <ColorSchemeProvider defaultScheme="violet">
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </ColorSchemeProvider>
      </ThemeProvider>
    </MotionProvider>
  );
};

export default Provider;
