import clsx from 'clsx';

interface LogoProps {
  active?: boolean;
}

const Logo = ({ active = false }: LogoProps) => {
  return (
    <div className={clsx('flex items-center gap-1.5 font-[1000] leading-none')}>
      <div
        className={clsx(
          'flex h-6 w-6 items-center justify-center rounded-lg border-2',
          [
            active
              ? 'border-primary-400 bg-primary-400 dark:border-primary-300 dark:bg-primary-300'
              : 'border-primary-400 dark:border-primary-300',
          ]
        )}
      >
        <div
          className={clsx('h-3 w-0.5 rotate-12 rounded-full', [
            active ? 'bg-white' : 'bg-primary-400 dark:bg-primary-300',
          ])}
        />
      </div>
      <div className={clsx('-mt-1 hidden text-xl', 'md:block')}>
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
