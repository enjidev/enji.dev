import FontPlusJakartaSans from '@/components/fonts/PlusJakartaSans';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import type { ReactNode } from 'react';

const Root = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <FontPlusJakartaSans />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Root;
