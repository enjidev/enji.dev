import { prisma } from '@/utils/prisma';

import type { TContentMeta, TReaction } from '@/types';

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
          [cur.slug]: cur,
        }),
        {}
      )
    : {};
};

export const getContentMeta = async (
  slug: string
): Promise<{ shares: number; views: number; reactions: number }> => {
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

  return {
    shares: result?._count.shares || 0,
    views: result?._count.views || 0,
    reactions: result?._count.reactions || 0,
  };
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
