import { prisma } from '@/utils/prisma';

import type { TContentMeta, TReaction } from '@/types';
import type { ReactionType, ShareType } from '@prisma/client';

export const getAllContentMeta = async (): Promise<
  Record<string, TContentMeta>
> => {
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

  return result && result.length > 0
    ? result.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.slug]: {
            meta: {
              views: cur._count.views,
              shares: cur._count.shares,
            },
          },
        }),
        {} as Record<string, TContentMeta>
      )
    : {};
};

export const getContentMeta = async (
  slug: string
): Promise<{ shares: number; views: number }> => {
  const result = await prisma.contentMeta.findFirst({
    where: {
      slug,
    },
    include: {
      _count: {
        select: {
          shares: true,
          views: true,
        },
      },
    },
  });

  return {
    shares: result?._count.shares || 0,
    views: result?._count.views || 0,
  };
};

export const getReactions = async (slug: string): Promise<TReaction> => {
  const result = await prisma.reaction.groupBy({
    by: ['type'],
    _sum: {
      count: true,
    },
    where: {
      content: {
        slug,
      },
    },
  });

  return result.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.type]: cur._sum.count,
    }),
    {
      CLAPPING: 0,
      THINKING: 0,
      AMAZED: 0,
    }
  );
};

export const getReactionsBy = async (
  slug: string,
  sessionId: string
): Promise<TReaction> => {
  const result = await prisma.reaction.groupBy({
    by: ['type'],
    _sum: {
      count: true,
    },
    where: {
      sessionId,
      content: {
        slug,
      },
    },
  });

  return result.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.type]: cur._sum.count,
    }),
    {
      CLAPPING: 0,
      THINKING: 0,
      AMAZED: 0,
    }
  );
};

export const setReaction = async ({
  slug,
  count,
  section,
  sessionId,
  type,
}: {
  slug: string;
  count: number;
  section: string;
  sessionId: string;
  type: ReactionType;
}) => {
  const result = await prisma.reaction.create({
    data: {
      count,
      type,
      section,
      sessionId,
      content: {
        connectOrCreate: {
          where: {
            slug,
          },
          create: {
            slug,
          },
        },
      },
    },
  });

  return result;
};

export const getSharesBy = async (
  slug: string,
  sessionId: string
): Promise<number> => {
  const result = await prisma.share.count({
    where: {
      sessionId,
      content: {
        slug,
      },
    },
  });

  return result || 0;
};

export const setShare = async ({
  slug,
  type,
  sessionId,
}: {
  slug: string;
  type: ShareType;
  sessionId: string;
}) => {
  const result = await prisma.share.create({
    data: {
      type,
      sessionId,
      content: {
        connectOrCreate: {
          where: {
            slug,
          },
          create: {
            slug,
          },
        },
      },
    },
  });

  return result;
};
