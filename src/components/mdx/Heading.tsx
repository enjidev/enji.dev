import clsx from 'clsx';
import type { MDXComponents } from 'mdx/types';

export const H2: NonNullable<MDXComponents['h1']> = ({ children }) => {
  return <h2 className={clsx('mb-2 scroll-mt-8 text-4xl')}>{children}</h2>;
};
