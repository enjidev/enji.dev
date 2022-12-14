import clsx from 'clsx';

interface LogoProps {
  active?: boolean;
}

function Logo({ active = false }: LogoProps) {
  return (
    <div className={clsx('flex items-center gap-1.5 font-[1000] leading-none')}>
      <div
        className={clsx(
          'flex h-6 w-6 items-center justify-center rounded-lg border-2',
          [
            active
              ? 'border-accent-600 bg-accent-600 dark:border-accent-500 dark:bg-accent-500'
              : 'border-accent-600 dark:border-accent-500',
          ]
        )}
      >
        <div
          className={clsx('h-3 w-0.5 rotate-12 rounded-full', [
            active ? 'bg-white' : 'bg-accent-600 dark:bg-accent-400',
          ])}
        />
      </div>
      <div className={clsx('-mt-1 hidden text-xl', 'sm:block')}>
        <span className={clsx('text-slate-900', 'dark:text-slate-200')}>
          enji
        </span>
        <span className={clsx('text-accent-600', 'dark:text-accent-500')}>
          dev
        </span>
      </div>
    </div>
  );
}

export default Logo;
