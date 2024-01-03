import { ContentType, ReactionType } from '@prisma/client';
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
      const contentType = z.nativeEnum(ContentType).parse(req.body.contentType);
      const contentTitle = z.string().parse(req.body.contentTitle);
      const type = z.nativeEnum(ReactionType).parse(req.body.type);
      const count = z.number().parse(req.body.count || 1);
      const section = z.string().nullish().parse(req.body.section);

      // get current user reactions count
      const reactionsDetailUser = await getReactionsBy(slug, sessionId);
      const currentCount = reactionsDetailUser[type];

      if (currentCount < MAX_REACTIONS_PER_SESSION) {
        // ensure that the count is not 0 and has not exceeded the maximum limit
        const quota = Math.min(
          Math.max(1, count),
          MAX_REACTIONS_PER_SESSION - currentCount
        );

        await setReaction({
          slug,
          contentType,
          contentTitle,
          sessionId,
          type,
          count: quota,
          section,
        });

        res.status(200).json({ message: 'Success' });
      } else {
        res.status(403).json({ message: 'Max limit reached' });
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
