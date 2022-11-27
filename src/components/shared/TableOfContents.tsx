import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useScrollSpy from '@/hooks/useScrollSpy';

import type { TTableOfContentsItem } from '@/types';

interface TableOfContentsLinkProps extends TTableOfContentsItem {
  active?: boolean;
}

const TableOfContentsLink = ({
  title,
  depth,
  slug,
  active = false,
}: TableOfContentsLinkProps) => {
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
  const currentSlug = useScrollSpy();

  return (
    <div
      className={clsx(
        'sticky top-8 w-72 rounded-xl border border-divider-light bg-white p-6',
        'dark:border-divider-dark dark:bg-slate-900'
      )}
    >
      <div
        className={clsx('flex items-center justify-between text-sm font-bold')}
      >
        <span>Table of Contents</span>
        {currentSlug && (
          <motion.div
            initial={{ x: 16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Link
              href=""
              className={clsx(
                'cursor-pointer font-normal text-primary-700',
                'dark:text-primary-400'
              )}
            >
              Scroll to top
            </Link>
          </motion.div>
        )}
      </div>

      <div className={clsx('mt-4')}>
        <ul
          className={clsx(
            'flex flex-col gap-2 border-l border-divider-light',
            'dark:border-divider-dark'
          )}
        >
          {items.map(({ title, depth, slug }) => {
            const isActive = currentSlug ? currentSlug === slug : false;

            return (
              <li key={slug}>
                <TableOfContentsLink
                  title={title}
                  depth={depth}
                  slug={slug}
                  active={isActive}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;
