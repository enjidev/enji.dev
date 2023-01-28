import clsx from 'clsx';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { ExternalLink } from '@/components/Icons';

import type { LinkProps } from 'next/link';

type QuickViewProps = LinkProps & PropsWithChildren;

export function QuickView({ href, children }: QuickViewProps) {
  const handleQuickView = () => {
    const title = 'Quick Preview';
    const width = 480;
    const height = window.innerHeight - 100;
    const left = window.innerWidth - (width + 50);
    const top = 100;

    const newWindow = window.open(
      href.toString(),
      title,
      `width=${width},height=${height},left=${left},top=${top}`
    );

    newWindow.focus();
  };

  return (
    <>
      <span className={clsx('hidden items-center gap-2', 'xl:inline-flex')}>
        {/* only show for large devices */}
        <Link href={href} className={clsx('link')}>
          {children}
        </Link>
        <button
          type="button"
          onClick={handleQuickView}
          className={clsx(
            'bg-accent-600/[0.08] text-accent-600 inline-flex h-6 items-center gap-1 rounded-full px-2 text-[13px] font-medium',
            'dark:text-accent-400 dark:dark:bg-accent-400/10 dark:font-normal'
          )}
        >
          Quick View
          <ExternalLink className={clsx('h-3.5 w-3.5')} />
        </button>
      </span>

      {/* show basic link on small devices */}
      <Link href={href} className={clsx('link', 'xl:hidden')}>
        {children}
      </Link>
    </>
  );
}
