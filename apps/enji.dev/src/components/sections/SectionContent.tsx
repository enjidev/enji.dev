import clsx from 'clsx';

import type { PropsWithChildren } from 'react';

function SectionContent({ children }: PropsWithChildren) {
  return (
    <div
      className={clsx(
        'background-grid background-grid--fade-out border-divider-light mt-20 border-t',
        'dark:border-divider-dark'
      )}
    >
      <div className={clsx('content-wrapper pb-20')}>{children}</div>
    </div>
  );
}

export default SectionContent;
