import useSWR from 'swr';

import fetcher from '@/utils/fetcher';

import type { TContentActivity } from '@/types';

export default function useContentActivity() {
  const {
    data,
    error: isError,
    isLoading,
  } = useSWR<TContentActivity[]>('/api/activity', fetcher, {
    fallbackData: [],
  });

  return {
    isLoading,
    isError,
    data,
  };
}
