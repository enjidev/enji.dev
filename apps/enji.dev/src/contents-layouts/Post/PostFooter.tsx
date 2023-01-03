import clsx from 'clsx';
import Link from 'next/link';

import { TPostFrontMatter } from '@/types';

type TagProps = {
  href: string;
  children: React.ReactNode;
};

function Tag({ href, children }: TagProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'bg-accent-600/[0.08] text-accent-600 inline-flex h-6 items-center rounded-full px-1.5 text-[13px] font-medium',
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
  return (
    <div className={clsx('content-wrapper mt-10')}>
      <div
        className={clsx(
          'flex flex-wrap gap-x-1 gap-y-2 text-sm text-slate-600',
          'dark:text-slate-500'
        )}
      >
        Posted on
        <Link
          href="/blog"
          className={clsx('text-accent-600 font-bold', 'dark:text-accent-500')}
        >
          {category}
        </Link>
        with tags:
        <div className={clsx('flex gap-1')}>
          {tags.map((tag) => (
            <Tag href="/blog" key={tag}>
              #{tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostFooter;
