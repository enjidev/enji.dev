import clsx from 'clsx';
import { QuoteIcon } from '@/components/Icons';

const Quote = () => {
  return (
    <blockquote
      className={clsx(
        'flex gap-2 pt-2 text-2xl text-slate-500',
        'lg:pt-0 lg:text-5xl',
        'dark:text-slate-400'
      )}
    >
      <QuoteIcon
        className={clsx(
          '-mt-5 h-16 text-slate-300',
          'lg:h-24',
          'dark:text-slate-800'
        )}
      />
      <div className={clsx('flex flex-col')}>
        <span className={clsx('leading-[1.15]')}>
          <em>beautiful</em>
        </span>
        <span
          className={clsx('flex items-center gap-2 leading-[1.15]', 'lg:gap-4')}
        >
          <span
            className={clsx(
              'mt-1 h-0.5 w-8 bg-slate-400',
              'lg:h-1 lg:w-24',
              'dark:bg-slate-600'
            )}
          ></span>
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
              out
            </strong>
          </span>
          <span
            className={clsx(
              'mt-1 h-0.5 w-6 bg-slate-400',
              'lg:h-1 lg:w-14',
              'dark:bg-slate-600'
            )}
          ></span>
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
                'absolute -left-0.5 right-0 top-1 bottom-0 z-[-1] bg-slate-100 px-1',
                'lg:-left-1.5 lg:-right-0.5 lg:top-2 lg:bottom-0',
                'dark:bg-slate-800'
              )}
            ></span>
            must.
          </strong>
        </span>
      </div>
    </blockquote>
  );
};

export default Quote;
