import dayjs from '@/utils/dayjs';
import { getBaseUrl, getParams } from '@/helpers/url';

import type { TPostFrontMatter, TPostOgImage } from '@/types';

export const formatDate = (date: string) => {
  dayjs.locale('de');
  if (dayjs(date).isValid()) {
    return dayjs(date, 'YYYY-MM-DD').format('MMMM D, YYYY');
  }

  return date;
};

export const formatDateRelative = (date: string) => {
  dayjs.locale('de');
  if (dayjs(date).isValid()) {
    const days = dayjs().diff(date, 'days');

    if (days > 6) {
      return formatDate(date);
    }

    if (days > 1) {
      return `vor ${days} Tagen`;
    }

    if (days === 1) {
      return `Gestern`;
    }

    if (days === 0) {
      return `Heute`;
    }
  }

  return date;
};

export const formatDateISO = (date: string) => {
  dayjs.locale('de');
  if (dayjs(date).isValid()) {
    return dayjs(date, 'YYYY-MM-DD').format();
  }

  return date;
};

export const formatLang = (lang: TPostFrontMatter['lang']) => {
  switch (lang) {
    case 'en':
      return 'English';
    case 'de':
      return 'Deutsch';
    default:
      return '';
  }
};

export const formatNumber = (number: number): string => number.toLocaleString();

export const getPostOgImageUrl = (data: TPostOgImage) => {
  const getUrl = (aspectRatio?: TPostOgImage['aspectRatio']) => {
    const params = aspectRatio
      ? getParams({ ...data, aspectRatio })
      : getParams(data);

    return encodeURI(`${getBaseUrl()}/api/og-post?${params}`);
  };

  return {
    default: getUrl(),
    '16/9': getUrl('16/9'),
    '4/3': getUrl('4/3'),
    '1/1': getUrl('1/1'),
  };
};

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
        name: 'Flumuffel',
        jobTitle: 'Hobby Entwickler und Community Owner',
        url: 'https://www.flumuffel.de/about',
      },
    ],
  });
