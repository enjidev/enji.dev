import clsx from 'clsx';
import type { TTableOfContentsItem } from '@/types';

const TableOfContentsLink = ({ title, depth, slug }: TTableOfContentsItem) => {
  const active = false;

  return (
    <a
      className={clsx('-ml-[1px] flex border-l p-1 text-[13px]', [
        depth === 2 ? ['pl-8 '] : ['pl-4 font-bold', 'dark:font-semibold'],
        active
          ? [
              'border-primary-600 text-primary-600',
              'hover:text-primary-700',
              'dark:border-primary-400 dark:text-primary-400',
              'dark:hover:border-primary-300 dark:hover:text-primary-300',
            ]
          : [
              depth === 2
                ? ['text-slate-600', 'dark:text-slate-400']
                : ['text-slate-700', 'dark:text-slate-300'],
              'border-divider-light',
              'hover:border-primary-700 hover:text-primary-700',
              'dark:border-divider-dark dark:hover:border-primary-300 dark:hover:text-primary-300',
            ],
      ])}
      href={`#${slug}`}
    >
      {title}
    </a>
  );
};

interface TableOfContensProps {
  items: Array<TTableOfContentsItem>;
}

const TableOfContents = ({ items = [] }: TableOfContensProps) => {
  return (
    <div
      className={clsx(
        'sticky top-8 w-72 rounded-xl border border-divider-light bg-white p-6',
        'dark:border-divider-dark dark:bg-slate-900'
      )}
    >
      <span className={clsx('text-sm font-bold')}>Table of Contents</span>
      <div className={clsx('mt-4')}>
        <ul
          className={clsx(
            'flex flex-col gap-2 border-l border-divider-light',
            'dark:border-divider-dark'
          )}
        >
          {items.map((item) => {
            return (
              <li key={item.slug}>
                <TableOfContentsLink {...item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;
