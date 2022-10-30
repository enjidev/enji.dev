import { Plus_Jakarta_Sans } from '@next/font/google';
import type { ReactNode } from 'react';

const _font = Plus_Jakarta_Sans({
  subsets: ['latin'],
});

const Root = ({ children }: { children: ReactNode }) => {
  return <div className={_font.className}>{children}</div>;
};

export default Root;
