import clsx from 'clsx';

import { QuickAccessIcon } from '@/components/Icons';
import QuickAccess from '@/components/QuickAccess';

function NavIconQuickAccess() {
  return (
    <>
      <button
        type="button"
        className={clsx(
          'ml-1 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-300/50 text-slate-800',
          'hover:bg-slate-300/70 sm:ml-0',
          'dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50'
        )}
        aria-label="Open Quick Access"
        title="Open Quick Access"
      >
        <QuickAccessIcon className={clsx('h-5 w-5')} />
      </button>
      <QuickAccess />
    </>
  );
}

export default NavIconQuickAccess;
