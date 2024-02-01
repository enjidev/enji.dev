import clsx from 'clsx';

import type { PropsWithChildren } from 'react';

function SectionContent({ children }: PropsWithChildren) {
  return (
    <div
      className={clsx(
        'background-grid background-grid--fade-out mt-20 border-t border-divider-light',
        'dark:border-divider-dark'
      )}
    >
      <div className={clsx('content-wrapper pb-20')}>{children}</div>
    </div>
  );
}

export default SectionContent;
