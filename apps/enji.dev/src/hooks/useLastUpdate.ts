import useSWR from 'swr';

import fetcher from '@/utils/fetcher';

import type { TApiError, TLastUpdate } from '@/types';

export default function useLastUpdate() {
  const { data, error } = useSWR<TLastUpdate | TApiError>(
    '/api/last-update',
    fetcher
  );

  const isError: boolean = (data && (data as TApiError).error) || error;

  return {
    data: data as TLastUpdate,
    isError,
    isLoading: !isError && !data,
  };
}
