import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { DarkIcon, LightIcon } from '@/components/Icons';

const NavIconTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      className={clsx(
        'ml-1 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-gray-800',
        'hover:bg-slate-200 sm:ml-0',
        'dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50'
      )}
      aria-label="Toggle Theme"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && resolvedTheme === 'dark' ? (
        <LightIcon className={clsx('h-5 w-5')} />
      ) : (
        <DarkIcon className={clsx('h-5 w-5')} />
      )}
    </button>
  );
};

export default NavIconTheme;
