import clsx from 'clsx';
import { m, useAnimation } from 'framer-motion';

import { DarkIcon, LightIcon } from '@/components/Icons';

import useTheme from '@/hooks/useTheme';

function NavIconTheme() {
  const controls = useAnimation();
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    const isDark = theme === 'dark';

    controls
      // stage 1 - scale, opaque the transition.
      .start({
        backgroundColor: isDark ? '#ffffff' : '#0f172a', // white : bg-slate-900
        scale: [0, 120],
        opacity: 1,
      })
      .finally(() => {
        // stage 2 - change theme in the background, fade out the transition.
        setTheme(theme === 'dark' ? 'light' : 'dark');
        controls
          .start({
            opacity: [1, 0],
            transition: {
              duration: 0.34,
            },
          })
          .finally(() => {
            // stage 3 - reset scale and opacity to default property
            controls.set({ scale: 0, opacity: 0 });
          });
      });
  };

  return (
    <>
      <div
        className={clsx(
          'pointer-events-none fixed right-4 z-[2000] origin-center',
          'md:right-auto'
        )}
      >
        <m.div
          animate={controls}
          className={clsx(
            'pointer-events-auto h-9 w-9 origin-center scale-0 rounded-full opacity-0'
          )}
        />
      </div>
      <button
        type="button"
        className={clsx(
          'ml-1 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-300/50 text-slate-800',
          'hover:bg-slate-300/70 sm:ml-0',
          'dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50'
        )}
        aria-label={theme === 'dark' ? 'Use Light Mode' : 'Use Dark Mode'}
        title={theme === 'dark' ? 'Use Light Mode' : 'Use Dark Mode'}
        onClick={handleThemeChange}
      >
        <div className={clsx('hidden', 'dark:block')}>
          <LightIcon className={clsx('h-5 w-5')} />
        </div>
        <div className={clsx('dark:hidden')}>
          <DarkIcon className={clsx('h-5 w-5')} />
        </div>
      </button>
    </>
  );
}

export default NavIconTheme;
