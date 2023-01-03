/* eslint-disable react/jsx-props-no-spreading */

import clsx from 'clsx';
import NextImage from 'next/image';

import type { ImageProps as NextImageProps } from 'next/image';

export type ImageProps = NextImageProps & {
  immersive?: boolean;
};

export default function Image({ immersive = true, src, ...props }: ImageProps) {
  return (
    <div className={clsx('custom-image relative')}>
      {immersive ? (
        <div
          style={{ backgroundImage: `url(${src})` }}
          className={clsx(
            'absolute -inset-8 z-[-1] hidden rounded-[20%] bg-[length:180%_180%] bg-center opacity-50 blur-2xl',
            'dark:block dark:opacity-25'
          )}
        />
      ) : null}
      <NextImage
        src={src}
        {...props}
        className={clsx(
          'border-divider-light rounded-lg border',
          'dark:border-divider-dark'
        )}
      />
    </div>
  );
}
