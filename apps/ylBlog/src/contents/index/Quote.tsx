import clsx from 'clsx';

import { QuoteIcon } from '@/components/Icons';

function Quote() {
  return (
    <blockquote
      className={clsx(
        'flex gap-2 pt-2 text-3xl text-slate-500',
        'md:text-4xl lg:pt-0 lg:text-5xl',
        'dark:text-slate-400'
      )}
    >
      <QuoteIcon
        className={clsx(
          '-mt-1 h-10 text-slate-300',
          'md:-mt-3 md:h-16 lg:h-24',
          'dark:text-slate-800'
        )}
      />
      <span className={clsx('flex flex-col')}>
        <span className={clsx('leading-[1.15]')}>
          <em>使用</em>
        </span>
        <span
          className={clsx('flex items-center gap-2 leading-[1.15]', 'lg:gap-4')}
        >
          <span
            className={clsx(
              'mt-1 h-0.5 w-8 rounded-full bg-slate-400',
              'lg:h-1 lg:w-24',
              'dark:bg-slate-600'
            )}
          />
          <span>
            <strong
              className={clsx(
                'font-extrabold text-slate-600',
                'dark:text-slate-300'
              )}
            >
              博客的力量
            </strong>
          </span>
          <span
            className={clsx(
              'mt-1 h-0.5 w-6 rounded-full bg-slate-400',
              'lg:h-1 lg:w-14',
              'dark:bg-slate-600'
            )}
          />
        </span>
        <span className={clsx('leading-[1.15]')}>来学习与记录。</span>
      </span>
    </blockquote>
  );
}

export default Quote;
