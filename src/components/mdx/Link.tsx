import clsx from 'clsx';
import NextLink from 'next/link';
import { ExternalLink } from '@/components/shared/Icons';

import type { MDXComponents } from 'mdx/types';

const isExternal = (url: string) => {
  return url.indexOf('/') !== 0;
};

export const Link: NonNullable<MDXComponents['a']> = ({ children, href }) => {
  if (!href) {
    return <span>{children}</span>;
  }

  return isExternal(href) ? (
    <a href={href} target="_blank" rel="noreferrer" className={clsx('link')}>
      {children}
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  ) : (
    <NextLink href={href} className={clsx('link')}>
      {children}
    </NextLink>
  );
};
