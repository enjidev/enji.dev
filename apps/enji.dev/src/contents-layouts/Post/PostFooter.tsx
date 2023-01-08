import clsx from 'clsx';
import Link from 'next/link';

import { TwitterIcon } from '@/components/Icons';

import useCurrentUrl from '@/hooks/useCurrentUrl';

import { TPostFrontMatter } from '@/types';

type ChipProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

function Chip({ href, external = false, children }: ChipProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={clsx(
          'bg-accent-600/[0.08] text-accent-600 inline-flex h-6 items-center gap-1 rounded-full px-2 text-[13px] font-medium',
          'dark:text-accent-500 dark:dark:bg-accent-400/10 dark:font-normal'
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(
        'bg-accent-600/[0.08] text-accent-600 inline-flex h-6 items-center gap-1 rounded-full px-2 text-[13px] font-medium',
        'dark:text-accent-500 dark:dark:bg-accent-400/10 dark:font-normal'
      )}
    >
      {children}
    </Link>
  );
}

interface PostFooterProps {
  tags: TPostFrontMatter['tags'];
  category: TPostFrontMatter['category'];
}

function PostFooter({ tags, category }: PostFooterProps) {
  const currentUrl = useCurrentUrl();

  return (
    <div
      className={clsx(
        'mt-24 flex flex-col gap-6 text-sm text-slate-600',
        'md:flex-row md:items-center md:justify-between',
        'dark:text-slate-500'
      )}
    >
      <div className={clsx('flex flex-wrap gap-x-1 gap-y-2')}>
        Posted on
        <Link
          href="/blog"
          className={clsx('text-accent-600 font-bold', 'dark:text-accent-500')}
        >
          {category}
        </Link>
        with tags:
        <div className={clsx('flex flex-wrap gap-1')}>
          {tags.map((tag) => (
            <Chip href="/blog" key={tag}>
              #{tag}
            </Chip>
          ))}
        </div>
      </div>
      <div className={clsx('flex flex-wrap gap-x-1 gap-y-2')}>
        Share this on:
        <div className={clsx('flex flex-wrap gap-1')}>
          <Chip
            href={`https://twitter.com/intent/tweet?via=enjidev&url=${currentUrl}`}
            external
          >
            <TwitterIcon className={clsx('mt-0.5 h-4 w-4')} />
            Twitter
          </Chip>
        </div>
      </div>
    </div>
  );
}

export default PostFooter;
