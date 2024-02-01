import clsx from 'clsx';

import { HashtagIcon } from '@/components/Icons';

import { getSlug } from '@/helpers/mdx';

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function H2({ children }: Props) {
  const slug = getSlug(children);

  return (
    <h2
      id={slug}
      data-ss={slug}
      data-ss-mt={96}
      className={clsx('mdx-heading mdx-heading--h2 group')}
    >
      <a
        href={`#${slug}`}
        className={clsx('mdx-heading__anchor group-hover:opacity-100')}
        aria-labelledby={slug}
        title={`Link to ${children}`}
      >
        <HashtagIcon />
      </a>
      <span>{children}</span>
    </h2>
  );
}

export function H3({ children }: Props) {
  const slug = getSlug(children);

  return (
    <h3
      id={slug}
      data-ss={slug}
      data-ss-mt={96}
      className={clsx('mdx-heading mdx-heading--h3 group')}
    >
      <a
        href={`#${slug}`}
        className={clsx('mdx-heading__anchor group-hover:opacity-100')}
        aria-labelledby={slug}
      >
        <HashtagIcon />
      </a>
      <span>{children}</span>
    </h3>
  );
}
