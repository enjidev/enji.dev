import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import type { TLastUpdate } from '@/types';

export default function useLastUpdate() {
  const { data, error } = useSWR<TLastUpdate>('/api/last-update', fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
