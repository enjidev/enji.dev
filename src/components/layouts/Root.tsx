import { Plus_Jakarta_Sans } from '@next/font/google';
import type { ReactNode } from 'react';

const _font = Plus_Jakarta_Sans({
  subsets: ['latin'],
});

const Root = ({ children }: { children: ReactNode }) => {
  return (
    <div id="__next-layout" className={_font.className}>
      <main>{children}</main>
    </div>
  );
};

export default Root;
