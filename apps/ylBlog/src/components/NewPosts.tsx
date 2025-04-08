import clsx from 'clsx';
import { m } from 'framer-motion';
import Link from 'next/link';

import useNewPosts from '@/hooks/useNewPosts';

import { relativeTime } from '@/helpers/date';

const animation = {
  hide: { y: -32, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.084,
    },
  },
};

interface NewPostsProps {
  onItemClick?: () => void;
}

function NewPosts({ onItemClick = () => {} }: NewPostsProps) {
  const { data } = useNewPosts();

  if (data.length === 0) return null;

  return (
    <div className={clsx('flex flex-col gap-4')}>
      <m.div
        initial="hide"
        animate="show"
        transition={{
          delayChildren: 0.06,
          staggerChildren: 0.12,
        }}
        className={clsx(
          'scrollbar-hide flex flex-1 flex-col gap-2 overflow-y-auto p-2'
        )}
      >
        {Array.isArray(data) &&
          data.map(({ slug, title, createdAt }) => {
            const link = `/blog/${slug}`;

            return (
              <m.div key={createdAt} variants={animation}>
                <Link
                  href={link}
                  onClick={() => {
                    onItemClick();
                  }}
                  className={clsx(
                    'border-divider-light block rounded-xl border bg-white/50 p-4 text-sm backdrop-blur',
                    'dark:border-divider-dark dark:bg-slate-900/60'
                  )}
                >
                  <div
                    className={clsx(
                      'mb-2 flex items-center justify-between text-xs text-slate-600',
                      'dark:text-slate-400'
                    )}
                  >
                    <span
                      className={clsx(
                        'bg-accent-100 text-accent-900 flex h-5 items-center rounded-md px-1.5 text-[10px] font-black',
                        'dark:bg-accent-800 dark:text-accent-100'
                      )}
                    >
                      NEW POST &nbsp; 🔥
                    </span>
                    <span>{relativeTime(createdAt)}</span>
                  </div>
                  <span className={clsx('text-base font-medium')}>{title}</span>
                </Link>
              </m.div>
            );
          })}
      </m.div>
    </div>
  );
}

export default NewPosts;
