import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import QuickAccess from '@/components/QuickAccess';
import Shortcuts from '@/components/Shortcuts';

import type { PropsWithChildren } from 'react';

function WithNavigationFooter({ children }: PropsWithChildren) {
  return (
    <>
      <QuickAccess />
      <Shortcuts />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default WithNavigationFooter;
