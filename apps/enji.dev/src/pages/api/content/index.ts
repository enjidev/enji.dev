import { getAllContentMeta } from '@/lib/meta';

import type { TApiResponse, TContentMeta } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<TContentMeta> | TApiResponse>
) {
  try {
    if (req.method === 'GET') {
      const result = await getAllContentMeta();

      res.status(200).json(result);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
