import clsx from 'clsx';
import { getSlug } from '@/utils/mdx';
import { HashtagIcon } from '@/components/shared/Icons';

import type { MDXComponents } from 'mdx/types';

export const H2: NonNullable<MDXComponents['h2']> = ({ children }) => {
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
};

export const H3: NonNullable<MDXComponents['h3']> = ({ children }) => {
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
};
