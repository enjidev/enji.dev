/* eslint-disable react/jsx-props-no-spreading */

import clsx from 'clsx';
import { useState } from 'react';

import { EyeSlash } from '@/components/Icons';
import Image from '@/components/mdx/Image';

import type { ImageProps } from '@/components/mdx/Image';

type ImageSensitiveProps = ImageProps & {
  message?: string;
};

export default function ImageSensitive({
  message = '',
  ...props
}: ImageSensitiveProps) {
  const [isShown, setShown] = useState<boolean>(false);

  return (
    <div className={clsx('mdx-image-sensitive relative')}>
      <button
        type="button"
        className={clsx(
          'border-divider-light absolute bottom-4 right-4 z-20 mt-4 flex h-8 items-center rounded-full border bg-white/70 px-4 text-sm',
          'md:bottom-6 md:right-6',
          'dark:border-divider-dark dark:bg-slate-900/80'
        )}
        onClick={() => setShown(!isShown)}
      >
        {isShown ? 'Hide' : 'Show'}
      </button>
      {!isShown && (
        <div
          className={clsx(
            'border-divider-light background-grid absolute inset-0 z-10 flex items-center justify-center rounded-lg border',
            'dark:border-divider-dark'
          )}
        >
          <div
            className={clsx(
              'flex flex-col items-center gap-1 px-4 text-center'
            )}
          >
            <EyeSlash className={clsx('mb-2 h-5 w-5')} />
            <div className={clsx('font-bold')}>
              {message || 'Sensitive Content'}
            </div>
            <p className={clsx('text-sm')}>
              WARNING: This image is flagged as sensitive content.
            </p>
          </div>
        </div>
      )}
      <Image immersive={isShown} {...props} />
    </div>
  );
}
