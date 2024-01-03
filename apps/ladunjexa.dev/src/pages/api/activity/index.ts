import { getContentActivity } from '@/lib/meta';

import type { TApiResponse, TContentActivity } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TContentActivity[] | TApiResponse>
) {
  try {
    if (req.method === 'GET') {
      const contentActivity = await getContentActivity();

      res.status(200).json(contentActivity);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);

    res.status(500).json({ message: 'Internal Server Error' });
  }
}
