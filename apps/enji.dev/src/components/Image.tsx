/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import NextImage from 'next/image';
import { useState } from 'react';

import type { ImageProps as NextImageProps } from 'next/image';

export type ImageProps = NextImageProps & {
  immersive?: boolean;
};

export default function Image({
  immersive = true,
  className,
  src,
  ...props
}: ImageProps) {
  const [image, setImage] = useState<string>('');

  return (
    <div className={clsx('mdx-image relative')}>
      {immersive && image ? (
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={clsx(
            'absolute -inset-8 z-[-1] rounded-[20%] bg-[length:180%_180%] bg-center opacity-25 blur-2xl',
            'hidden', // disable immersive on light mode
            'dark:block'
          )}
        />
      ) : null}
      <NextImage
        src={src}
        className={clsx(
          'border-divider-light rounded-lg border',
          'dark:border-divider-dark',
          className
        )}
        {...props}
        onLoadingComplete={(img) => {
          setImage(img.currentSrc);
        }}
      />
    </div>
  );
}
