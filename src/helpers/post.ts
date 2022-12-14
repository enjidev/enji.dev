import dayjs from '@/utils/dayjs';
import { getBaseUrl } from '@/helpers/url';

import type { TPostFrontMatter } from '@/types';

export const formatDate = (date: string) => {
  if (dayjs(date).isValid()) {
    return dayjs(date, 'YYYY-MM-DD').format('MMMM D, YYYY');
  }

  return date;
};

export const formatLang = (lang: TPostFrontMatter['lang']) => {
  switch (lang) {
    case 'EN':
      return 'English';
    case 'ID':
      return 'Bahasa Indonesia';
  }
};

type PostOgImageData = Pick<
  TPostFrontMatter,
  'category' | 'title' | 'date' | 'lang' | 'tags'
>;

export const getPostOgImageUrl = ({
  category,
  title,
  date,
  lang,
  tags,
}: PostOgImageData) => {
  return `${getBaseUrl()}/api/og?title=${title}&category=${category}&date=${date}&lang=${lang}&tags=${tags}`;
};
