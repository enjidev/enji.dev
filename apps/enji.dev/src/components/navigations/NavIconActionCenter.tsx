import { Popover } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';

import ActionCenter from '@/components/ActionCenter';
import { ActionCenterIcon, XIcon } from '@/components/Icons';

function NavIconActionCenter() {
  return (
    <Popover as={Fragment}>
      {({ open, close }) => (
        <>
          <Popover.Button
            className={clsx(
              'ml-1 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-300/50 text-slate-800',
              'hover:bg-slate-300/70 sm:ml-0',
              'dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50'
            )}
            aria-label="Open Action Center"
            title="Open Action Center"
          >
            <ActionCenterIcon className={clsx('h-5 w-5')} />
          </Popover.Button>
          {open && (
            <>
              <Popover.Panel static>
                <div
                  className={clsx(
                    'border-divider-light fixed left-4 right-4 top-20 flex flex-col rounded-xl border bg-white',
                    'sm:left-auto sm:right-6 sm:w-[320px]',
                    'lg:right-0 lg:top-0 lg:bottom-0 lg:overflow-y-auto lg:rounded-none lg:border-y-0 lg:border-l lg:border-r-0',
                    'dark:border-divider-dark dark:bg-[#161e31]'
                  )}
                >
                  <div
                    className={clsx(
                      'flex items-center justify-between p-4 pt-5'
                    )}
                  >
                    <div className={clsx('text-xl font-bold')}>
                      Action Center
                    </div>
                    <button
                      type="button"
                      className={clsx(
                        'rounded-xl bg-slate-200 p-2',
                        'dark:bg-[#1d263a]'
                      )}
                      title="Close Action Center"
                      aria-label="Close Action Center"
                      onClick={() => {
                        close();
                      }}
                    >
                      <XIcon className={clsx('h-5 w-5')} />
                    </button>
                  </div>
                  <ActionCenter />
                </div>
              </Popover.Panel>
              <div
                className={clsx(
                  'fixed inset-0 z-[-1] bg-gradient-to-b from-slate-100/0 via-slate-100/80 to-slate-100/80',
                  'dark:from-slate-900/0 dark:via-slate-900/90 dark:to-slate-900/90'
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
