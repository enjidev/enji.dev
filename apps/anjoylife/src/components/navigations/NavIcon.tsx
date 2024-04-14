import clsx from 'clsx';

import type { ReactElement } from 'react';

interface NavIconProps {
  href: string;
  icon: ReactElement;
  title: string;
  label?: string;
}

function NavIcon({ href, icon, title, label = '' }: NavIconProps) {
  return (
    <a
      href={href}
      className={clsx(
        'flex items-center justify-center rounded-xl',
        'hover:bg-slate-300/50',
        'dark:hover:bg-slate-800/50',
        [
          label && [
            'text-slate-800',
            'sm:bg-slate-300/50 sm:pr-3 sm:pl-1',
            'sm:hover:bg-slate-300/70',
            'dark:text-slate-100 sm:dark:bg-slate-800/50 sm:dark:hover:bg-slate-700/50',
          ],
        ]
      )}
      aria-label={`My ${title} profile`}
      title={`My ${title} profile`}
      target="_blank"
      rel="noreferrer nofollow"
    >
      <span
        className={clsx('flex h-9 w-9 items-center justify-center rounded-xl')}
      >
        {icon}
      </span>
      {label && (
        <span
          className={clsx(
            'hidden text-xs font-bold',
            'sm:block',
            'dark:font-semibold'
          )}
        >
          {label}
        </span>
      )}
    </a>
  );
}

export default NavIcon;
