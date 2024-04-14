/* eslint-disable no-template-curly-in-string */
import jsonata from 'jsonata';

import dayjs from '@/utils/dayjs';
import { prisma } from '@/utils/prisma';

import type { TContentActivity, TContentMeta, TReaction } from '@/types';
import type { ContentType, ReactionType, ShareType } from '@prisma/client';

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
    orderBy: {
      createdAt: 'asc',
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

export const getContentActivity = async (): Promise<TContentActivity[]> => {
  // last 24 hours
  const date = dayjs().subtract(24, 'hours').toDate();

  const result = await prisma.contentMeta.findMany({
    include: {
      reactions: {
        select: {
          type: true,
          count: true,
          createdAt: true,
          content: {
            select: { slug: true, title: true, type: true },
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
        where: {
          createdAt: {
            gte: date,
          },
        },
        take: 5,
      },
      shares: {
        select: {
          type: true,
          createdAt: true,
          content: {
            select: { slug: true, title: true, type: true },
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
        where: {
          createdAt: {
            gte: date,
          },
        },
        take: 5,
      },
    },
  });

  const expression = `
    $sort([
      $.reactions.{
        'activityType': 'REACTION',
        'type': type,
        'count': count,
        'createdAt': createdAt,
        'slug': content.slug,
        'contentTitle': content.title,
        'contentType': content.type
      }, 
      $.shares.{
        'activityType': 'SHARE',
        'type': type,
        'createdAt': createdAt,
        'slug': content.slug,
        'contentTitle': content.title,
        'contentType': content.type
      }
    ], function($l, $r) {
      $string($l.createdAt) < $string($r.createdAt)
    })[[0..4]]
  `;

  // transform result
  const transformed = await jsonata(expression).evaluate(result);

  return transformed;
};

export const getNewPosts = async (): Promise<
  {
    slug: string;
    title: string;
    createdAt: Date;
  }[]
> => {
  // last 8 days
  const date = dayjs().subtract(8, 'days').toDate();

  const result = await prisma.contentMeta.findMany({
    where: {
      type: 'POST',
      AND: {
        createdAt: {
          gte: date,
        },
      },
    },
    select: {
      slug: true,
      title: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 1,
  });

  return result;
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

  const expression = `$merge([
    {
      'CLAPPING': 0,
      'THINKING': 0,
      'AMAZED': 0
    },
    $.{
      type: _sum.count
    }
  ])`;

  // transform result
  const transformed = await jsonata(expression).evaluate(result);

  return transformed;
};

export const getSectionMeta = async (
  slug: string
): Promise<
  Record<
    string,
    {
      reactionsDetail: TReaction;
    }
  >
> => {
  const result = await prisma.reaction.groupBy({
    by: ['section', 'type'],
    _sum: {
      count: true,
    },
    where: {
      section: {
        not: null,
      },
      content: {
        slug,
      },
    },
    orderBy: {
      section: 'asc',
    },
  });

  const expression = `$\
    {
      section: {
        'reactionsDetail': $merge([
          {
            'CLAPPING': 0,
            'THINKING': 0,
            'AMAZED': 0
          },
          {
            type: _sum.count
          }
        ])
      }
    }`;

  // transform result
  const transformed = await jsonata(expression).evaluate(result);

  return transformed;
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

  const expression = `$merge([
    {
      'CLAPPING': 0,
      'THINKING': 0,
      'AMAZED': 0
    },
    $.{
      type: _sum.count
    }
  ])`;

  // transform result
  const transformed = await jsonata(expression).evaluate(result);

  return transformed;
};

export const setReaction = async ({
  slug,
  contentType,
  contentTitle,
  count,
  section,
  sessionId,
  type,
}: {
  slug: string;
  contentType: ContentType;
  contentTitle: string;
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
            type: contentType,
            title: contentTitle,
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
  contentType,
  contentTitle,
  type,
  sessionId,
}: {
  slug: string;
  contentType: ContentType;
  contentTitle: string;
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
            type: contentType,
            title: contentTitle,
          },
        },
      },
    },
  });

  return result;
};

export const getViewsBy = async (
  slug: string,
  sessionId: string
): Promise<number> => {
  const result = await prisma.view.count({
    where: {
      sessionId,
      content: {
        slug,
      },
    },
  });

  return result || 0;
};

export const setView = async ({
  slug,
  contentType,
  contentTitle,
  sessionId,
}: {
  slug: string;
  contentType: ContentType;
  contentTitle: string;
  sessionId: string;
}) => {
  const result = await prisma.view.create({
    data: {
      sessionId,
      content: {
        connectOrCreate: {
          where: {
            slug,
          },
          create: {
            slug,
            type: contentType,
            title: contentTitle,
          },
        },
      },
    },
  });

  return result;
};
