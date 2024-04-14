import { useRouter } from 'next/router';

import { getBaseUrl } from '@/helpers/url';

export default function useCurrentUrl() {
  const { pathname } = useRouter();

  return `${getBaseUrl()}${pathname}`;
}
