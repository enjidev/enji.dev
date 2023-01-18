import { ContentType, ShareType } from '@prisma/client';
import { z } from 'zod';

import { getSessionId } from '@/helpers/server';
import { getSharesBy, setShare } from '@/lib/meta';

import { MAX_SHARES_PER_SESSION } from '@/constants/app';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = z.string().parse(req.query.slug);
  const sessionId = getSessionId(req);

  try {
    if (req.method === 'POST') {
      const contentType = z.nativeEnum(ContentType).parse(req.body.contentType);
      const contentTitle = z.string().parse(req.body.contentTitle);
      const type = z.nativeEnum(ShareType).parse(req.body.type);
      const currentShares = await getSharesBy(slug, sessionId);

      if (currentShares < MAX_SHARES_PER_SESSION) {
        await setShare({
          slug,
          contentType,
          contentTitle,
          sessionId,
          type,
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
