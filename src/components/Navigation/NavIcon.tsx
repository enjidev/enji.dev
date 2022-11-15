import clsx from 'clsx';

interface NavIconProps {
  href: string;
  icon: React.ReactElement;
  title: string;
}

const NavIcon = ({ href, icon, title }: NavIconProps) => {
  return (
    <a
      href={href}
      className={clsx('flex items-center justify-center rounded-xl')}
      aria-label={title}
      target="_blank"
      rel="noreferrer"
    >
      <span
        className={clsx(
          'flex h-9 w-9 items-center justify-center rounded-xl text-gray-800',
          'dark:text-slate-100'
        )}
      >
        {icon}
      </span>
    </a>
  );
};

export default NavIcon;
