import { ReactionType, ShareType } from '@prisma/client';
import axios from 'axios';

import { TApiResponse } from '@/types';

export const postReaction = async ({
  slug,
  type,
  count,
  section,
}: {
  slug: string;
  type: ReactionType;
  count: number;
  section: string;
}) => {
  try {
    await axios.post<TApiResponse>(`/api/reactions/${slug}`, {
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
  type,
}: {
  slug: string;
  type: ShareType;
}) => {
  try {
    await axios.post<TApiResponse>(`/api/shares/${slug}`, {
      type,
    });
  } catch (err) {
    //
  }
};

export const postView = async (slug: string) => {
  try {
    await axios.post<TApiResponse>(`/api/views/${slug}`);
  } catch (err) {
    //
  }
};
