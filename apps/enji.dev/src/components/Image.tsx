/* eslint-disable react/jsx-props-no-spreading */

import clsx from 'clsx';
import NextImage from 'next/image';

import type { ImageProps as NextImageProps } from 'next/image';

export type ImageProps = NextImageProps;

export default function Image(props: ImageProps) {
  return (
    <div className={clsx('custom-image relative')}>
      <NextImage
        {...props}
        className={clsx(
          'border-divider-light rounded-lg border',
          'dark:border-divider-dark'
        )}
      />
    </div>
  );
}
