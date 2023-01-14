import { Popover } from '@headlessui/react';
import clsx from 'clsx';
import { m } from 'framer-motion';

import { InsightIcon } from '@/components/Icons';

import { formatNumber } from '@/helpers/post';

const animation = {
  hide: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.18 } },
};

interface InsightProps {
  views: number;
  shares: number;
  reactions: number;
}

function Insight({ views, shares, reactions }: InsightProps) {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            title="Insight"
            aria-label="Insight"
            className={clsx(
              'flex h-10 w-10 items-center justify-center rounded-full',
              'hover:bg-slate-200 hover:dark:bg-[#1d263a]'
            )}
          >
            <InsightIcon className={clsx('h-5 w-5')} />
          </Popover.Button>
          {open && (
            <Popover.Panel
              static
              as={m.div}
              variants={animation}
              initial="hide"
              animate="show"
              className={clsx(
                'border-divider-light absolute inset-x-2 bottom-24 z-[902] flex flex-col overflow-hidden rounded-2xl border bg-white pb-2 pt-1',
                'dark:border-divider-dark dark:bg-[#161e31]'
              )}
            >
              <div
                className={clsx(
                  'py-3 px-4 text-center text-[13px] text-lg font-bold'
                )}
              >
                insight
              </div>
              <div className={clsx('flex justify-evenly py-2 text-sm')}>
                <div className={clsx('flex flex-col items-center gap-1')}>
                  <div>views</div>
                  <div className={clsx('font-mono')}>{formatNumber(views)}</div>
                </div>
                <div className={clsx('flex flex-col items-center gap-1')}>
                  <div>shares</div>
                  <div className={clsx('font-mono')}>
                    {formatNumber(shares)}
                  </div>
                </div>
                <div className={clsx('flex flex-col items-center gap-1')}>
                  <div>reactions</div>
                  <div className={clsx('font-mono')}>
                    {formatNumber(reactions)}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          )}
        </>
      )}
    </Popover>
  );
}

export default Insight;
