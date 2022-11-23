import FontPlusJakartaSans from '@/components/fonts/PlusJakartaSans';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';

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
