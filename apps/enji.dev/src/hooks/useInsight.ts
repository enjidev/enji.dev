import axios from 'axios';
import { useEffect, useState } from 'react';

import { TApiResponse } from '@/types';

async function increaseView(slug: string) {
  const res = await axios.post<TApiResponse>(`/api/views/${slug}`);

  return res;
}

export default function useInsight(slug: string) {
  const [isError, setError] = useState<boolean>();
  const [data, setData] = useState<TApiResponse>();

  useEffect(() => {
    increaseView(slug)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        setError(true);
      });
  }, [slug]);

  return {
    isLoading: !data && !isError,
    isError,
    data,
  };
}
