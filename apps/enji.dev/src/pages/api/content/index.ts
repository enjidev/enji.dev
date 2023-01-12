import { prisma } from '@/utils/prisma';

import type { TApiResponse, TContentMeta } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<TContentMeta> | TApiResponse>
) {
  try {
    if (req.method === 'GET') {
      const result = await prisma.contentMeta.findMany({
        include: {
          _count: {
            select: {
              shares: true,
              views: true,
            },
          },
        },
      });

      const response = result.map(({ slug, _count }) => ({
        slug,
        meta: _count,
      }));

      res.status(200).json(response);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
