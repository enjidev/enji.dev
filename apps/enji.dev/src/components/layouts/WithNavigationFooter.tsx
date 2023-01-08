import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

import type { ReactNode } from 'react';

function WithNavigationFooter({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default WithNavigationFooter;
