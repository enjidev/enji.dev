import { z } from 'zod';

import { getSessionId } from '@/helpers/server';
import { getContentMeta, getReactions, getReactionsBy } from '@/lib/meta';

import type { TApiResponse, TContentMetaDetail } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TContentMetaDetail | TApiResponse>
) {
  const slug = z.string().parse(req.query.slug);
  const sessionId = getSessionId(req);

  try {
    if (req.method === 'GET') {
      const meta = await getContentMeta(slug);
      const reactionsDetail = await getReactions(slug);
      const reactionsDetailUser = await getReactionsBy(slug, sessionId);

      res.status(200).json({
        slug,
        meta: {
          shares: meta._count.shares,
          views: meta._count.views,
          reactions: meta._count.reactions,
          reactionsDetail,
        },
        metaUser: {
          reactionsDetail: reactionsDetailUser,
        },
      });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
