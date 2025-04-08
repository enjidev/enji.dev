import clsx from 'clsx';
import { m } from 'framer-motion';
import { Fragment } from 'react';

import { KeyboardIcon } from '@/components/Icons';
import Kbd from '@/components/Kbd';

const shortcuts: Array<{
  title: string;
  keys: Array<string>;
}> = [
  {
    title: '打开快速访问',
    keys: ['Q'],
  },
  {
    title: '关闭快速访问',
    keys: ['Q', 'Esc'],
  },
  {
    title: '切换黑夜模式',
    keys: ['D'],
  },
  {
    title: '切换专注模式',
    keys: ['F'],
  },
];

const animation = {
  hide: { x: -24, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.12,
    },
  },
};

function TipShortcuts() {
  return (
    <m.div
      initial="hide"
      animate="show"
      transition={{ delayChildren: 0.7, staggerChildren: 0.14 }}
      className={clsx('')}
    >
      <div className={clsx('mb-4 flex items-center gap-4 text-xl font-bold')}>
        <KeyboardIcon className={clsx('h-8 w-8')} />
        提示：快捷方式
      </div>
      <p className={clsx('mb-4 text-sm text-slate-700', 'dark:text-slate-400')}>
        使用键盘快捷键轻松浏览网站。
      </p>
      <div className={clsx('flex flex-col text-[13px]')}>
        {shortcuts.map(({ title, keys }) => (
          <m.div
            key={title}
            variants={animation}
            className={clsx(
              'flex items-center justify-between border-b border-slate-300 py-2',
              'dark:border-divider-dark'
            )}
          >
            <div className={clsx('text-slate-700', 'dark:text-slate-400')}>
              {title}
            </div>
            <div className={clsx('flex items-center gap-2 text-[12px]')}>
              {keys.map((key, i) => (
                <Fragment key={key}>
                  <Kbd>{key}</Kbd>
                  {i !== keys.length - 1 && <span>或</span>}
                </Fragment>
              ))}
            </div>
          </m.div>
        ))}
      </div>
    </m.div>
  );
}

export default TipShortcuts;
