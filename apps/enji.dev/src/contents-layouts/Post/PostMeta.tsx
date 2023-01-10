import clsx from 'clsx';

import { CalendarIcon, LanguageIcon } from '@/components/Icons';

import { formatDate, formatDateISO, formatLang } from '@/helpers/post';

import { TPostFrontMatter } from '@/types';

interface PostMetaProps {
  date: TPostFrontMatter['date'];
  lang: TPostFrontMatter['lang'];
}

function PostMeta({ date, lang }: PostMetaProps) {
  return (
    <div className={clsx('content-wrapper mb-10')}>
      <div
        className={clsx(
          'flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600',
          'dark:text-slate-400'
        )}
      >
        <div className={clsx('flex items-center gap-1.5')}>
          <CalendarIcon className={clsx('h-5 w-5')} />
          <time dateTime={formatDateISO(date)}>{formatDate(date)}</time>
        </div>
        <div className={clsx('flex items-center gap-1.5')}>
          <LanguageIcon className={clsx('h-5 w-5')} />
          {formatLang(lang)}
        </div>
      </div>
    </div>
  );
}

export default PostMeta;
