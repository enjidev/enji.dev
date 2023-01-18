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
        'flex flex-1 flex-col justify-between rounded-xl bg-slate-100 p-4',
        'dark:bg-[#1d263a]'
      )}
    >
      <div className={clsx('')}>{icon}</div>
      <div className={clsx('text-xs font-medium', 'dark:font-normal')}>
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
    <div className={clsx('flex flex-1 flex-col p-4 pb-6')}>
      <div className={clsx('flex-1')} />
      <div className={clsx('')}>
        <div className={clsx('flex h-20 gap-4')}>
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
  );
}

export default ActionCenter;
