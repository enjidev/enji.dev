import PlusJakartaSans from '@/components/fonts/PlusJakartaSans';
import Navbar from '@/components/Navbar';

import type { ReactNode } from 'react';

const Root = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <PlusJakartaSans />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Root;
