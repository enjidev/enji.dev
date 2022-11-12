import clsx from 'clsx';
import { EnjiIcon } from '@/components/Icons';

interface LogoProps {
  active?: boolean;
}

const Logo = ({ active = false }: LogoProps) => {
  return (
    <div
      className={clsx('flex items-center gap-1.5 font-extrabold leading-none')}
    >
      <EnjiIcon
        className={clsx('h-6 w-6', [
          active
            ? 'text-primary-400 dark:text-primary-200'
            : 'text-gray-900 dark:text-slate-200',
        ])}
      />
      <div className={clsx('-mt-1 hidden text-2xl', 'md:block')}>
        <span className={clsx('text-gray-900', 'dark:text-slate-200')}>
          enji
        </span>
        <span className={clsx('text-primary-400', 'dark:text-primary-200')}>
          dev
        </span>
      </div>
    </div>
  );
};

export default Logo;
