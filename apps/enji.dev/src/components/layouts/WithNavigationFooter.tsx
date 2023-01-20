import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import QuickAccess from '@/components/QuickAccess';

import type { PropsWithChildren } from 'react';

function WithNavigationFooter({ children }: PropsWithChildren) {
  return (
    <>
      <QuickAccess />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default WithNavigationFooter;
