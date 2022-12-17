import FontJetBrainsMono from '@/components/fonts/JetBrainsMono';
import FontPlusJakartaSans from '@/components/fonts/PlusJakartaSans';

import type { ReactNode } from 'react';

function Root({ children }: { children: ReactNode }) {
  return (
    <>
      <FontPlusJakartaSans />
      <FontJetBrainsMono />
      {children}
    </>
  );
}

export default Root;
