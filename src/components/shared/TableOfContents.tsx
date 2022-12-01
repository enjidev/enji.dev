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
      className={clsx('flex p-1 px-2 text-[13px]', [
        depth === 2 ? ['ml-4'] : ['font-bold', 'dark:font-semibold'],
        active
          ? [
              'text-primary-600',
              'hover:text-primary-700',
              'dark:text-primary-400',
              'dark:hover:text-primary-300',
            ]
          : [
              depth === 2
                ? ['text-slate-600', 'dark:text-slate-400']
                : ['text-slate-700', 'dark:text-slate-300'],
              'hover:text-primary-700',
              'dark:hover:text-primary-300',
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
  const { currentSlug, scrollProgress } = useScrollSpy('mdx-contents', 96);

  return (
    <>
      <div className={clsx('sticky top-24 z-[901] w-64')}>
        <div
          className={clsx(
            'flex items-center justify-between text-sm font-bold'
          )}
        >
          <span className={clsx('text-slate-700', 'dark:text-slate-300')}>
            Table of Contents
          </span>
          <motion.div
            initial={{ x: 16, opacity: 0 }}
            animate={currentSlug ? { x: 0, opacity: 1 } : { x: 16, opacity: 0 }}
          >
            <Link
              href=""
              className={clsx(
                'cursor-pointer p-1 px-2 font-normal text-primary-700',
                'dark:text-primary-400'
              )}
            >
              Scroll to top
            </Link>
          </motion.div>
        </div>
        <div
          className={clsx(
            'relative mt-4 border-l border-divider-light px-4',
            'dark:border-divider-dark'
          )}
        >
          <div
            className={clsx(
              'absolute top-0 bottom-0 left-[-1px] border-l border-primary-600',
              'dark:border-primary-400'
            )}
            style={{ height: `${scrollProgress}%` }}
          />
          <ul className={clsx('flex flex-col gap-2')}>
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
    </>
  );
};

export default TableOfContents;
