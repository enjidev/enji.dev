import { getBaseUrl, getParams } from '@/helpers/url';

import type { TPageFrontMatter } from '@/types';

type PageOgImageData = Pick<
  TPageFrontMatter,
  'caption' | 'title' | 'description'
>;

export const getPageOgImageUrl = ({
  caption,
  title,
  description,
}: PageOgImageData) =>
  encodeURI(
    `${getBaseUrl()}/api/og-page?${getParams({ caption, title, description })}`
  );
