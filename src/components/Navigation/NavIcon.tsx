import clsx from 'clsx';

interface NavIconProps {
  href: string;
  icon: React.ReactElement;
  title: string;
  label?: string;
}

const NavIcon = ({ href, icon, title, label }: NavIconProps) => {
  return (
    <a
      href={href}
      className={clsx(
        'flex items-center justify-center rounded-xl',
        'hover:bg-slate-100',
        'dark:hover:bg-slate-800/50',
        [
          label && [
            'text-gray-800',
            'sm:bg-slate-100 sm:pr-4 sm:pl-2',
            'sm:hover:bg-slate-200',
            'dark:text-slate-100 sm:dark:bg-slate-800/50 sm:dark:hover:bg-slate-700/50',
          ],
        ]
      )}
      aria-label={title}
      target="_blank"
      rel="noreferrer"
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
};

export default NavIcon;
