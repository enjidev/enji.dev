import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

import type { PropsWithChildren } from 'react';

function WithNavigationFooter({ children }: PropsWithChildren) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default WithNavigationFooter;
