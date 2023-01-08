import clsx from 'clsx';

import TableOfContents from '@/components/TableOfContents';

import type { TTableOfContents } from '@/types';

interface PageWithMDXProps {
  tableOfContents: TTableOfContents;
  children: React.ReactNode;
}

function PageWithMDX({ tableOfContents, children }: PageWithMDXProps) {
  return (
    <div
      className={clsx('content-wrapper overflow-hidden', 'lg:overflow-visible')}
    >
      <div className={clsx('flex flex-row-reverse gap-8', 'xl:gap-24')}>
        <div className={clsx('-mt-48 hidden', 'lg:block')}>
          <TableOfContents items={tableOfContents} />
        </div>
        <div
          className={clsx('mdx-contents min-w-0 flex-1 scroll-mt-[86px]')}
          id="main-contents"
          data-ss-wrapper
        >
          {children}
        </div>
        <div
          className={clsx(
            'border-divider-light hidden border-l',
            ' dark:border-divider-dark lg:block'
          )}
        />
      </div>
    </div>
  );
}

export default PageWithMDX;
