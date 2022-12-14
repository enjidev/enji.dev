import dayjs from '@/utils/dayjs';
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

export const getBaseUrl = () => {
  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case 'production':
      return 'https://enji.dev';
    case 'preview':
      return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    default:
      return `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
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
