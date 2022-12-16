import clsx from 'clsx';
import { motion } from 'framer-motion';

import useScrollSpy from '@/hooks/useScrollSpy';

import type { TTableOfContentsItem } from '@/types';

interface TableOfContentsLinkProps extends TTableOfContentsItem {
  active?: boolean;
}

function TableOfContentsLink({
  title,
  depth,
  slug,
  active = false,
}: TableOfContentsLinkProps) {
  return (
    <a
      className={clsx('toc-link', {
        'toc-link--depth-2': depth === 2,
        'toc-link--active': active,
      })}
      href={`#${slug}`}
    >
      {title}
    </a>
  );
}

interface TableOfContensProps {
  items: Array<TTableOfContentsItem>;
}

function TableOfContents({ items = [] }: TableOfContensProps) {
  const { currentSlug, scrollProgress } = useScrollSpy('main-contents', 96);

  const handleScrollToTopClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <nav className={clsx('sticky top-24 z-[901] w-64')}>
      <div
        className={clsx('flex items-center justify-between text-sm font-bold')}
      >
        <h2
          className={clsx('text-slate-700', 'dark:text-slate-300')}
          id="table-of-contents"
        >
          Table of Contents
        </h2>
        <motion.div
          initial={{ x: 16, opacity: 0 }}
          animate={currentSlug ? { x: 0, opacity: 1 } : { x: 16, opacity: 0 }}
        >
          <a
            href="#skip-navigation"
            className={clsx(
              'cursor-pointer p-1 px-2 font-normal text-accent-700',
              'dark:text-accent-400'
            )}
            tabIndex={currentSlug ? 0 : -1}
            onClick={handleScrollToTopClick}
          >
            Scroll to top
          </a>
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
            'absolute top-0 bottom-0 left-[-1px] border-l border-accent-600',
            'dark:border-accent-400'
          )}
          style={{ height: `${scrollProgress}%` }}
        />
        <ol className={clsx('flex flex-col gap-2')}>
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
        </ol>
      </div>
    </nav>
  );
}

export default TableOfContents;
