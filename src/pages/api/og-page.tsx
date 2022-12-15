import { ImageResponse } from '@vercel/og';

import { PageOgImage } from '@/components/meta/OgImages';

import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

const PlusJakartaSans400 = fetch(
  new URL('../../assets/fonts/PlusJakartaSans-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

const PlusJakartaSans800 = fetch(
  new URL('../../assets/fonts/PlusJakartaSans-ExtraBold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

const OgImage = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const get = (param: string): string => searchParams.get(param) || '';

  try {
    const caption = get('caption');
    const title = get('title');
    const description = get('description');

    const font400 = await PlusJakartaSans400;
    const font800 = await PlusJakartaSans800;

    return new ImageResponse(
      <PageOgImage caption={caption} title={title} description={description} />,
      {
        width: 1200,
        height: 630,
        emoji: 'fluent',
        fonts: [
          {
            data: font400,
            name: 'Plus Jakarta Sans',
            style: 'normal',
            weight: 400,
          },
          {
            data: font800,
            name: 'Plus Jakarta Sans',
            style: 'normal',
            weight: 800,
          },
        ],
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
};

export default OgImage;
