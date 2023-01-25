import clsx from 'clsx';

import TableOfContents from '@/components/TableOfContents';

import type { TTableOfContents } from '@/types';
import type { PropsWithChildren } from 'react';

interface PageWithMDXProps {
  tableOfContents: TTableOfContents;
}

function PageWithMDX({
  tableOfContents,
  children = null,
}: PropsWithChildren<PageWithMDXProps>) {
  return (
    <div
      className={clsx(
        'content-wrapper flex-shrink-0 overflow-hidden',
        'lg:overflow-visible'
      )}
    >
      <div className={clsx('flex flex-row-reverse gap-8', 'xl:gap-24')}>
        <div className={clsx('-mt-48 hidden', 'lg:block')}>
          <div
            className={clsx(
              'sticky top-24 z-[901] w-64',
              'xl:w-[272px]',
              'fm:relative fm:top-0'
            )}
          >
            <TableOfContents items={tableOfContents} />
          </div>
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
