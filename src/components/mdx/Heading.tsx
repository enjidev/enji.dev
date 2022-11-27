import { getSlug } from '@/utils/mdx';

import type { MDXComponents } from 'mdx/types';

export const H2: NonNullable<MDXComponents['h2']> = ({ children }) => {
  const slug = getSlug(children);

  return (
    <h2 data-ss={slug} data-ss-mt={32} id={slug}>
      {children}
    </h2>
  );
};

export const H3: NonNullable<MDXComponents['h3']> = ({ children }) => {
  const slug = getSlug(children);

  return (
    <h3 data-ss={slug} data-ss-mt={32} id={slug}>
      {children}
    </h3>
  );
};
