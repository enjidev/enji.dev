import useSWR from 'swr';

import fetcher from '@/utils/fetcher';

import type { TContentMetaDetail } from '@/types';

export default function useContentMetaDetail(slug: string) {
  const {
    data,
    error: isError,
    isLoading,
  } = useSWR<TContentMetaDetail>(`/api/content/${slug}`, fetcher);

  return {
    isLoading,
    isError,
    data,
  };
}
