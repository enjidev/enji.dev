import clsx from 'clsx';

interface AppWindowProps {
  children?: React.ReactNode;
}

const AppWindow = ({ children }: AppWindowProps) => {
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-xl border border-divider-light bg-white',
        'dark:border-divider-dark dark:bg-[#0c1222]'
      )}
    >
      <div
        className={clsx(
          'box-border flex h-10 items-center border-b border-divider-light px-3',
          'dark:border-divider-dark'
        )}
      >
        <div className={clsx('flex gap-1.5')}>
          <div className={clsx('h-3 w-3 rounded-full bg-red-400')} />
          <div className={clsx('h-3 w-3 rounded-full bg-amber-400')} />
          <div className={clsx('h-3 w-3 rounded-full bg-green-400')} />
        </div>
      </div>
      <div className={clsx('')}>{children}</div>
    </div>
  );
};

export default AppWindow;
