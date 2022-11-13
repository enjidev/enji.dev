import FontPlusJakartaSans from '@/components/fonts/PlusJakartaSans';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import type { ReactNode } from 'react';

const Root = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <FontPlusJakartaSans />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Root;
