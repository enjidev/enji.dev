import clsx from 'clsx';
import type { ReactElement } from 'react';

interface FeaturedCardProps {
  icon: ReactElement;
  title: string;
  desc: string;
}

const FeaturedCard = ({ icon, title, desc }: FeaturedCardProps) => {
  return (
    <div
      className={clsx(
        'relative z-10 flex-1 rounded-2xl border border-divider-light bg-white',
        'dark:border-divider-dark dark:bg-slate-900'
      )}
    >
      <div
        className={clsx(
          'absolute inset-x-0 inset-y-10 z-[-1] border-t border-divider-light',
          'dark:border-divider-dark'
        )}
      ></div>
      <div
        className={clsx(
          'absolute inset-y-0 inset-x-10 z-[-1] border-l border-divider-light',
          'dark:border-divider-dark'
        )}
      ></div>
      <div
        className={clsx(
          'mt-5 mr-4 ml-6 flex items-center gap-6 rounded-full bg-slate-100',
          'dark:bg-slate-800'
        )}
      >
        <div className={clsx('-m-2')}>{icon}</div>
        <div
          className={clsx(
            'truncate py-2 pr-4 font-bold text-gray-700',
            'dark:text-slate-300'
          )}
        >
          {title}
        </div>
      </div>
      <div
        className={clsx(
          'pb-6 pl-16 pt-4 pr-6 text-sm text-gray-500',
          'dark:text-slate-400'
        )}
      >
        {desc}
      </div>
    </div>
  );
};

export default FeaturedCard;
