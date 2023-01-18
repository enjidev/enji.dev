import clsx from 'clsx';
import { useTheme } from 'next-themes';

import { DarkIcon, LightIcon } from '@/components/Icons';

import type { PropsWithChildren, ReactElement } from 'react';

interface ActionCenterButtonProps {
  icon: ReactElement;
  title: string;
  onClick?: () => void;
}

function ActionCenterButton({
  icon,
  title,
  onClick = () => {},
}: PropsWithChildren<ActionCenterButtonProps>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'border-divider-light flex flex-1 flex-col justify-between rounded-xl border bg-white p-4',
        'dark:border-divider-dark dark:bg-[#1d263a]'
      )}
    >
      <div className={clsx('')}>{icon}</div>
      <div className={clsx('text-[13px] font-medium', 'dark:font-normal')}>
        {title}
      </div>
    </button>
  );
}

function ActionCenter() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={clsx('flex flex-col gap-4')}>
      <div className={clsx('text-xl font-bold')}>Action Center</div>
      <div className={clsx('flex flex-1 flex-col gap-8')}>
        <div className={clsx('')}>
          <div className={clsx('flex h-24 gap-4')}>
            <ActionCenterButton
              title={theme === 'dark' ? 'Use Light Mode' : 'Use Dark Mode'}
              onClick={handleThemeChange}
              icon={
                <>
                  <div className={clsx('hidden', 'dark:block')}>
                    <LightIcon className={clsx('h-5 w-5')} />
                  </div>
                  <div className={clsx('dark:hidden')}>
                    <DarkIcon className={clsx('h-5 w-5')} />
                  </div>
                </>
              }
            />
            <ActionCenterButton
              title={theme === 'dark' ? 'Use Light Mode' : 'Use Dark Mode'}
              onClick={handleThemeChange}
              icon={
                <>
                  <div className={clsx('hidden', 'dark:block')}>
                    <LightIcon className={clsx('h-5 w-5')} />
                  </div>
                  <div className={clsx('dark:hidden')}>
                    <DarkIcon className={clsx('h-5 w-5')} />
                  </div>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionCenter;
