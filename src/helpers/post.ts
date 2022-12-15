import dayjs from '@/utils/dayjs';
import { getBaseUrl, getParams } from '@/helpers/url';

import type { TPostFrontMatter, TPostOgImage } from '@/types';

export const formatDate = (date: string) => {
  if (dayjs(date).isValid()) {
    return dayjs(date, 'YYYY-MM-DD').format('MMMM D, YYYY');
  }

  return date;
};

export const formatDateISO = (date: string) => {
  if (dayjs(date).isValid()) {
    return dayjs(date, 'YYYY-MM-DD').format();
  }

  return date;
};

export const formatLang = (lang: TPostFrontMatter['lang']) => {
  switch (lang) {
    case 'ID':
      return 'Bahasa Indonesia';
    case 'EN':
      return 'English';
    default:
      return '';
  }
};

export const getPostOgImageUrl = ({
  category,
  title,
  date,
  lang,
  tags,
}: TPostOgImage) =>
  encodeURI(
    `${getBaseUrl()}/api/og-post?${getParams({
      category,
      title,
      date,
      lang,
      tags,
    })}`
  );

export const getPostStructuredData = ({
  title,
  dateModified,
  datePublished,
  images,
}: {
  title: string;
  images: Array<string>;
  datePublished: string;
  dateModified: string;
}) =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    image: images,
    datePublished: formatDateISO(datePublished),
    dateModified: formatDateISO(dateModified),
    author: [
      {
        '@type': 'Person',
        name: 'Enji Kusnadi',
        jobTitle: 'Front-End Developer',
        url: 'https://www.enji.dev/about',
      },
    ],
  });
