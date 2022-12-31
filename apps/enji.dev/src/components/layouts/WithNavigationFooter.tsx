import Footer from '@/components/shared/Footer';
import Navigation from '@/components/shared/Navigation';

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
