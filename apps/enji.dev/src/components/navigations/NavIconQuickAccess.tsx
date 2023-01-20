import clsx from 'clsx';

import { QuickAccessIcon } from '@/components/Icons';

import useGlobal from '@/hooks/useGlobal';

function NavIconQuickAccess() {
  const { setQuickAccessOpen } = useGlobal();

  return (
    <button
      type="button"
      className={clsx(
        'ml-1 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-300/50 text-slate-800',
        'hover:bg-slate-300/70 sm:ml-0',
        'dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50'
      )}
      aria-label="Open Quick Access"
      title="Open Quick Access"
      onClick={() => {
        setQuickAccessOpen(true);
      }}
    >
      <QuickAccessIcon className={clsx('h-5 w-5')} />
    </button>
  );
}

export default NavIconQuickAccess;
