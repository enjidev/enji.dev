import clsx from 'clsx';

import { HashtagIcon } from '@/components/shared/Icons';

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
      className={clsx('with-anchor group')}
    >
      <a
        href={`#${slug}`}
        className={clsx('group-hover:opacity-100')}
        aria-labelledby={slug}
      >
        <HashtagIcon className={clsx('h-5 w-5')} />
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
      className={clsx('with-anchor group')}
    >
      <a
        href={`#${slug}`}
        className={clsx('group-hover:opacity-100')}
        aria-labelledby={slug}
      >
        <HashtagIcon className={clsx('h-5 w-5')} />
      </a>
      <span>{children}</span>
    </h3>
  );
}
