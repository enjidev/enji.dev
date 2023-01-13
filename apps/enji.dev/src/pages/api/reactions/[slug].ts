import { ReactionType } from '@prisma/client';
import { z } from 'zod';

import { getSessionId } from '@/helpers/server';
import { getReactionsBy, setReaction } from '@/lib/meta';

import { MAX_REACTIONS_PER_SESSION } from '@/constants/app';

import type { TApiResponse, TContentMetaDetail } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TContentMetaDetail | TApiResponse>
) {
  const slug = z.string().parse(req.query.slug);
  const sessionId = getSessionId(req);

  try {
    if (req.method === 'POST') {
      const type = z.nativeEnum(ReactionType).parse(req.body.type);
      const count = z.number().parse(req.body.count || 1);
      const section = z.string().nullish().parse(req.body.section);

      if (count > 0) {
        // get current user reaction count
        const reactionsDetailUser = await getReactionsBy(slug, sessionId);
        const currentCount = reactionsDetailUser[type];

        if (currentCount <= MAX_REACTIONS_PER_SESSION) {
          // make sure the count is not exceeded the max limit.
          const quota = Math.min(
            count,
            MAX_REACTIONS_PER_SESSION - currentCount
          );

          await setReaction({
            slug,
            sessionId,
            type,
            count: quota,
            section,
          });

          res.status(200).json({ message: 'Success' });
        } else {
          res.status(403).json({ message: 'Max limit reached' });
        }
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);

    res.status(500).json({ message: 'Internal Server Error' });
  }
}
