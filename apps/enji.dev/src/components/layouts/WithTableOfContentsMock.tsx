import clsx from 'clsx';

import type { PropsWithChildren } from 'react';

function WithTableOfContentsMock({ children = null }: PropsWithChildren) {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex flex-row-reverse gap-8', 'xl:gap-24')}>
        <div className={clsx('-mt-48 hidden', 'lg:block')}>
          {/* mock table of contents width */}
          <div className={clsx('w-64', 'xl:w-[272px]')} />
        </div>
        <div className={clsx('min-w-0 flex-1')}>{children}</div>
        <div className={clsx('hidden', ' lg:block')} />
      </div>
    </div>
  );
}

export default WithTableOfContentsMock;
