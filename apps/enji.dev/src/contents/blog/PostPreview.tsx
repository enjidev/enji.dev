import clsx from 'clsx';
import Link from 'next/link';

import { ChevronRightIcon } from '@/components/Icons';

import { formatDate, formatLang } from '@/helpers/post';

import type { TPostFrontMatter } from '@/types';

type PostPreviewProps = TPostFrontMatter & {
  slug: string;
};

function PostPreview({
  title,
  description,
  date,
  slug,
  lang,
}: PostPreviewProps) {
  return (
    <article lang={lang}>
      <Link
        key={slug}
        href={`blog/${slug}`}
        className={clsx(
          'group block rounded-xl bg-gradient-to-t ',
          'sm:p-4 md:p-6'
        )}
      >
        <div
          className={clsx(
            'text-slate mb-2 flex gap-1 text-xs text-slate-500',
            'dark:text-slate-400 md:mb-1'
          )}
        >
          <time dateTime={date}>{formatDate(date)}</time>
          <span>&middot;</span>
          <span>{formatLang(lang)}</span>
        </div>
        <div className={clsx('mb-2')}>
          <h2
            className={clsx(
              'text-xl font-extrabold text-slate-700',
              'md:text-2xl',
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
            'text-accent-600 flex items-center gap-1 text-sm font-semibold',
            'dark:text-accent-400'
          )}
        >
          read more{' '}
          <ChevronRightIcon className="group-hover:animate-bounce-x mt-1 h-3 w-3 transition" />
        </div>
      </Link>
    </article>
  );
}

export default PostPreview;
