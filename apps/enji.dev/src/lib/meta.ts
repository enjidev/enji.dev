import { prisma } from '@/utils/prisma';

import type { TContentMeta, TReaction } from '@/types';

export const getAllContentMeta = async (): Promise<Array<TContentMeta>> => {
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

  return result.map(({ slug, _count }) => ({
    slug,
    meta: _count,
  }));
};

export const getContentMeta = async (slug: string) => {
  const result = await prisma.contentMeta.findFirst({
    where: {
      slug,
    },
    include: {
      _count: {
        select: {
          shares: true,
          views: true,
          reactions: true,
        },
      },
    },
  });

  return result;
};

export const getReactions = async (slug: string): Promise<TReaction> => {
  const result = await prisma.reaction.groupBy({
    by: ['type'],
    _count: true,
    where: {
      content: {
        slug,
      },
    },
  });

  return result && result.length > 0
    ? result.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.type]: cur._count,
        }),
        {} as TReaction
      )
    : {
        CLAPPING: 0,
        THINKING: 0,
        AMAZED: 0,
      };
};

export const getReactionsBy = async (
  slug: string,
  sessionId: string
): Promise<TReaction> => {
  const result = await prisma.reaction.groupBy({
    by: ['type'],
    _count: true,
    where: {
      sessionId,
      content: {
        slug,
      },
    },
  });

  return result && result.length > 0
    ? result.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.type]: cur._count,
        }),
        {} as TReaction
      )
    : {
        CLAPPING: 0,
        THINKING: 0,
        AMAZED: 0,
      };
};
