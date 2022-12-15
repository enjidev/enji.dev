import { getBaseUrl, getParams } from '@/helpers/url';

import type { TPageOgImage } from '@/types';

export const getPageOgImageUrl = ({
  caption,
  title,
  description,
}: TPageOgImage) =>
  encodeURI(
    `${getBaseUrl()}/api/og-page?${getParams({ caption, title, description })}`
  );
