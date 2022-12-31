import {
  JetBrains_Mono as JetBrainsMono,
  Plus_Jakarta_Sans as PlusJakartaSans,
} from '@next/font/google';
import clsx from 'clsx';

import type { ReactNode } from 'react';

const jetbrainsMono = JetBrainsMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const plusJakartaSans = PlusJakartaSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

function Root({ children }: { children: ReactNode }) {
  return (
    <div
      id="__root"
      className={clsx([jetbrainsMono.variable, plusJakartaSans.variable])}
    >
      {children}
    </div>
  );
}

export default Root;
