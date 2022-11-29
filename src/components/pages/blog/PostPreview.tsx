import clsx from 'clsx';
import dayjs from '@/utils/dayjs';
import Link from 'next/link';
import { ChevronRightIcon } from '@/components/shared/Icons';

import type { TPostFrontMatter } from '@/types';

type PostPreviewProps = TPostFrontMatter & {};

const PostPreview = ({
  title,
  description,
  date,
  slug,
  pageLang,
  pageStatus,
}: PostPreviewProps) => {
  return (
    <Link
      key={slug}
      href={`blog/${slug}`}
      className={clsx(
        'block rounded-xl bg-gradient-to-t p-4',
        'md:p-6',
        'hover:from-slate-50 hover:via-slate-50/0 dark:hover:from-black/5 dark:hover:via-black/0'
      )}
    >
      <div
        className={clsx(
          'text-slate mb-2 flex gap-1 text-xs text-slate-500',
          'dark:text-slate-400'
        )}
      >
        <span>{dayjs(date, 'YYYY-MM-DD').format('MMMM D, YYYY')}</span>
        {pageLang && pageLang === 'id' && (
          <>
            <span>&middot;</span>
            <span>Bahasa Indonesia</span>
          </>
        )}
      </div>
      <div className={clsx('mb-1')}>
        <h2
          className={clsx(
            'font-extrabold text-slate-700',
            'dark:text-slate-300'
          )}
        >
          {title}
          {pageStatus && (
            <span
              className={clsx(
                'ml-2 font-normal text-slate-600',
                'md:ml-2',
                'dark:text-slate-400'
              )}
            >
              {pageStatus}
            </span>
          )}
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
          'flex items-center gap-1 text-sm font-semibold text-primary-600',
          'dark:text-primary-400'
        )}
      >
        read more <ChevronRightIcon className="mt-1 h-3 w-3" />
      </div>
    </Link>
  );
};

export default PostPreview;
