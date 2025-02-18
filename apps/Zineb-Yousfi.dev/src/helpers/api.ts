import { ContentType, ReactionType, ShareType } from '@prisma/client';
import axios from 'axios';

import { TApiResponse } from '@/types';

export const postReaction = async ({
  slug,
  contentType,
  contentTitle,
  type,
  count,
  section,
}: {
  slug: string;
  contentType: ContentType;
  contentTitle: string;
  type: ReactionType;
  count: number;
  section: string;
}) => {
  try {
    await axios.post<TApiResponse>(`/api/reactions/${slug}`, {
      contentType,
      contentTitle,
      type,
      count,
      section,
    });
  } catch (err) {
    //
  }
};

export const postShare = async ({
  slug,
  contentType,
  contentTitle,
  type,
}: {
  slug: string;
  contentType: ContentType;
  contentTitle: string;
  type: ShareType;
}) => {
  try {
    await axios.post<TApiResponse>(`/api/shares/${slug}`, {
      contentType,
      contentTitle,
      type,
    });
  } catch (err) {
    //
  }
};

export const postView = async ({
  slug,
  contentType,
  contentTitle,
}: {
  slug: string;
  contentType: ContentType;
  contentTitle: string;
}) => {
  try {
    await axios.post<TApiResponse>(`/api/views/${slug}`, {
      contentType,
      contentTitle,
    });
  } catch (err) {
    //
  }
};
