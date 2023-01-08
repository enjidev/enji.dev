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
          <em>Beautiful</em>{' '}
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
              inside
            </strong>{' '}
            and{' '}
            <strong
              className={clsx(
                'font-extrabold text-slate-600',
                'dark:text-slate-300'
              )}
            >
              out{' '}
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
        <span className={clsx('leading-[1.15]')}>
          is a{' '}
          <strong
            className={clsx(
              'relative font-extrabold text-slate-600',
              'dark:text-slate-300'
            )}
          >
            <span
              className={clsx(
                'absolute -left-0.5 right-0 top-1 bottom-0 z-[-1] rounded-md bg-slate-100 px-1',
                'lg:-left-1.5 lg:-right-0.5 lg:top-2 lg:bottom-0',
                'dark:bg-slate-800'
              )}
            />
            must.
          </strong>
        </span>
      </span>
    </blockquote>
  );
}

export default Quote;
