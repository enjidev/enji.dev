import PlusJakartaSans from '@/components/fonts/PlusJakartaSans';
import type { ReactNode } from 'react';

const Root = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <PlusJakartaSans />
      <main id="__next-layout">{children}</main>
    </>
  );
};

export default Root;
