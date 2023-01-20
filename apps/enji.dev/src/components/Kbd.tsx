import clsx from 'clsx';

import type { PropsWithChildren } from 'react';

function Kbd({ children }: PropsWithChildren) {
  return (
    <kbd
      className={clsx(
        'rounded-[4px] border border-b-[3px] border-slate-400 bg-slate-300 px-1 py-0.5 font-mono',
        'dark:border-slate-300 dark:bg-transparent'
      )}
    >
      {children}
    </kbd>
  );
}

export default Kbd;
