import { Popover } from '@headlessui/react';
import clsx from 'clsx';
import { m } from 'framer-motion';
import { Fragment } from 'react';

import ActionCenter from '@/components/ActionCenter';
import Activity from '@/components/Activity';
import { ActionCenterIcon } from '@/components/Icons';
import NewPosts from '@/components/NewPosts';

const animation = {
  hide: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.18 } },
};

function NavIconActionCenter() {
  return (
    <Popover as={Fragment}>
      {({ open, close }) => (
        <>
          <Popover.Button
            className={clsx(
              'ml-1 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-300/50 text-slate-800',
              'hover:bg-slate-300/70 sm:ml-0',
              'dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50',
              [open && ['bg-slate-300/70', 'dark:bg-slate-700/50']]
            )}
            aria-label={open ? 'Close Action Center' : 'Open Action Center'}
            title={open ? 'Close Action Center' : 'Open Action Center'}
          >
            <ActionCenterIcon className={clsx('h-5 w-5')} />
          </Popover.Button>
          {open && (
            <>
              <Popover.Panel static>
                <div
                  data-accent="violet"
                  className={clsx(
                    'fixed left-4 right-4 bottom-0 top-24 flex flex-col gap-8',
                    'sm:left-auto sm:right-6 sm:w-[320px]'
                  )}
                >
                  <div className={clsx('')}>
                    <ActionCenter />
                  </div>
                  <div className={clsx('')}>
                    <NewPosts closeActionCenter={close} />
                  </div>
                  <div className={clsx('flex flex-1 flex-col')}>
                    <Activity closeActionCenter={close} />
                  </div>
                </div>
              </Popover.Panel>
              <m.div
                variants={animation}
                initial="hide"
                animate="show"
                className={clsx(
                  'fixed inset-0 z-[-1] bg-white/95',
                  'dark:bg-slate-900/95 sm:dark:bg-slate-900/60',
                  'sm:bg-white/30 sm:bg-gradient-to-b sm:from-slate-100/80 sm:via-slate-100/95 sm:to-slate-100/95',
                  'dark:from-slate-900/90 dark:via-slate-900/95 dark:to-slate-900/95'
                )}
              />
            </>
          )}
        </>
      )}
    </Popover>
  );
}

export default NavIconActionCenter;
