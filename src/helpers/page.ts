import { getBaseUrl } from '@/helpers/url';

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
  `${getBaseUrl()}/api/og-page?title=${title}&caption=${caption}&description=${description}`;
