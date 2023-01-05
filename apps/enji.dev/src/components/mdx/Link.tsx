import clsx from 'clsx';
import NextLink from 'next/link';

import { ExternalLink, MailIcon } from '@/components/shared/Icons';

import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const urlType = (url: string) => {
  if (url.indexOf('/') === 0) {
    return 'internal';
  }

  if (url.indexOf('mailto') === 0) {
    return 'mail';
  }

  return 'external';
};

export function Link({ children, href }: Props) {
  if (!href) {
    return <span>{children}</span>;
  }

  const type = urlType(href);

  switch (type) {
    case 'external':
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={clsx('mdx-link')}
        >
          {children}
          <ExternalLink />
        </a>
      );
    case 'mail':
      return (
        <a href={href} className={clsx('mdx-link')}>
          <MailIcon />
          {children}
        </a>
      );
    default:
      return (
        <NextLink href={href} className={clsx('mdx-link')}>
          {children}
        </NextLink>
      );
  }
}
