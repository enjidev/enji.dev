import clsx from 'clsx';
import Link from 'next/link';

import { ChevronRightIcon } from '@/components/shared/Icons';

import { formatDate, formatLang } from '@/helpers/post';

import type { TPostFrontMatter } from '@/types';

type PostPreviewProps = TPostFrontMatter & {
  slug: string;
};

const PostPreview = ({
  title,
  description,
  date,
  slug,
  lang,
}: PostPreviewProps) => {
  return (
    <Link
      key={slug}
      href={`blog/${slug}`}
      className={clsx('group block rounded-xl bg-gradient-to-t p-4', 'md:p-6')}
    >
      <div
        className={clsx(
          'text-slate mb-2 flex gap-1 text-xs text-slate-500',
          'dark:text-slate-400'
        )}
      >
        <span>{formatDate(date)}</span>
        <span>&middot;</span>
        <span>{formatLang(lang)}</span>
      </div>
      <div className={clsx('mb-1')}>
        <h2
          className={clsx(
            'font-extrabold text-slate-700',
            'dark:text-slate-300'
          )}
        >
          {title}
        </h2>
      </div>
      <p
        className={clsx(
          'mb-2 block leading-relaxed text-slate-600',
          'dark:text-slate-400'
        )}
      >
        {description}
      </p>
      <div
        className={clsx(
          'flex items-center gap-1 text-sm font-semibold text-accent-600',
          'dark:text-accent-400'
        )}
      >
        read more{' '}
        <ChevronRightIcon className="mt-1 h-3 w-3 transition group-hover:animate-bounce-x" />
      </div>
    </Link>
  );
};

export default PostPreview;
