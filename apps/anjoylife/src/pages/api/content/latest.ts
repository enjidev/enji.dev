import { getNewPosts } from '@/lib/meta';

import type { TApiResponse } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    | {
        slug: string;
        title: string;
        createdAt: Date;
      }[]
    | TApiResponse
  >
) {
  try {
    if (req.method === 'GET') {
      const newPosts = await getNewPosts();

      res.status(200).json(newPosts);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);

    res.status(500).json({ message: 'Internal Server Error' });
  }
}
