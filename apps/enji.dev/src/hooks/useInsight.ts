import { ContentType, ReactionType, ShareType } from '@prisma/client';
import merge from 'lodash/merge';
import { useEffect, useRef } from 'react';
import useSWR from 'swr';

import fetcher from '@/utils/fetcher';
import { postReaction, postShare, postView } from '@/helpers/api';

import type { TContentMetaDetail } from '@/types';

const INITIAL_VALUE: TContentMetaDetail = {
  meta: {
    views: 0,
    shares: 0,
    reactions: 0,
    reactionsDetail: {
      CLAPPING: 0,
      THINKING: 0,
      AMAZED: 0,
    },
  },
  metaUser: {
    reactionsDetail: {
      CLAPPING: 0,
      THINKING: 0,
      AMAZED: 0,
    },
  },
  metaSection: {},
};

export default function useInsight({
  slug,
  contentType,
  contentTitle,
  countView = true,
}: {
  slug: string;
  contentType: ContentType;
  contentTitle: string;
  countView?: boolean;
}) {
  // #region handle for batch click
  const timer = useRef<Record<ReactionType, NodeJS.Timeout>>({
    CLAPPING: null,
    THINKING: null,
    AMAZED: null,
  });
  const count = useRef<Record<ReactionType, number>>({
    CLAPPING: 0,
    THINKING: 0,
    AMAZED: 0,
  });
  // #endregion

  const { isLoading, data, mutate } = useSWR<TContentMetaDetail>(
    `/api/content/${slug}`,
    fetcher,
    {
      fallbackData: INITIAL_VALUE,
    }
  );

  // post view count
  useEffect(() => {
    if (countView) {
      postView({ slug, contentType, contentTitle });
    }
  }, [slug, contentType, contentTitle, countView]);

  const addShare = ({ type }: { type: ShareType }) => {
    // optimistic update
    mutate(
      merge({}, data, {
        meta: {
          shares: data.meta.shares + 1,
        },
      }),
      false
    );

    postShare({
      slug,
      contentType,
      contentTitle,
      type,
    });
  };

  const addReaction = ({
    type,
    section = undefined,
  }: {
    type: ReactionType;
    section?: string;
  }) => {
    // optimistic update
    mutate(
      merge({}, data, {
        meta: {
          reactions: data.meta.reactions + 1,
          reactionsDetail: {
            [type]: data.meta.reactionsDetail[type] + 1,
          },
        },
        metaUser: {
          reactionsDetail: {
            [type]: data.metaUser.reactionsDetail[type] + 1,
          },
        },
      }),
      false
    );

    // increment the current batch click count
    count.current[type] += 1;

    // debounce the batch click for sending the reaction data
    clearTimeout(timer.current[type]);
    timer.current[type] = setTimeout(() => {
      postReaction({
        slug,
        contentType,
        contentTitle,
        type,
        count: count.current[type],
        section,
      }).finally(() => {
        // reset the batch click count to zero for the next batch
        count.current[type] = 0;
      });
    }, 500);
  };

  return {
    isLoading,
    data,
    addShare,
    addReaction,
  };
}
