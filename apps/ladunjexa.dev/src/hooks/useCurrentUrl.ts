import { usePathname } from 'next/navigation';

import { getBaseUrl } from '@/helpers/url';

export default function useCurrentUrl() {
  const pathname = usePathname();

  return `${getBaseUrl()}${pathname}`;
}
