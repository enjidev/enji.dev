import { useEffect } from 'react';
import useSWR from 'swr';

import fetcher from '@/utils/fetcher';
import { postView } from '@/helpers/api';

import type { TContentMetaDetail } from '@/types';

export default function useInsight(slug: string) {
  // get detailed content meta
  const { data } = useSWR<TContentMetaDetail>(`/api/content/${slug}`, fetcher);

  // increase view
  useEffect(() => {
    postView(slug);
  }, [slug]);

  return {
    data,
  };
}
