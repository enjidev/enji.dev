/* eslint-disable react/jsx-props-no-spreading */

import clsx from 'clsx';
import NextImage from 'next/image';

import type { ImageProps as NextImageProps } from 'next/image';

export type ImageProps = NextImageProps & {
  backdrop?: boolean;
};

export default function Image({ backdrop = true, ...props }: ImageProps) {
  return (
    <div className={clsx('custom-image relative')}>
      {backdrop && (
        <div
          role="presentation"
          className={clsx(
            'pointer-events-none absolute inset-0 z-[-1] scale-x-105 scale-y-105 opacity-25 blur-2xl'
          )}
        >
          <NextImage {...props} className={clsx('rounded-lg saturate-200')} />
        </div>
      )}

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
