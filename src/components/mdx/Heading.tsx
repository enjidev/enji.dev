import { getSlug } from '@/utils/mdx';
import clsx from 'clsx';

import type { MDXComponents } from 'mdx/types';

export const H2: NonNullable<MDXComponents['h2']> = ({ children }) => {
  return (
    <h2
      className={clsx('mb-2 mt-10 scroll-mt-8 text-3xl font-bold')}
      id={getSlug(children)}
    >
      {children}
    </h2>
  );
};

export const H3: NonNullable<MDXComponents['h3']> = ({ children }) => {
  return (
    <h3
      className={clsx('mb-2 mt-10 scroll-mt-8 text-xl font-bold')}
      id={getSlug(children)}
    >
      {children}
    </h3>
  );
};
