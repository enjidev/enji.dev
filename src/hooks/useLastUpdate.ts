import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import type { TLastUpdate, TApiError } from '@/types';

export default function useLastUpdate() {
  const { data, error } = useSWR<TLastUpdate | TApiError>(
    '/api/last-update',
    fetcher
  );

  const isError: boolean = (data && (data as TApiError).error) || error;

  return {
    data: data as TLastUpdate,
    isError: isError,
    isLoading: !isError && !data,
  };
}
