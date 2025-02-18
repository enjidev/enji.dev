import clsx from 'clsx';

import type { PropsWithChildren } from 'react';

interface SkeletonProps {
  /**
   * Skeleton width in pixels.
   */
  w?: number;
}

export function SkeletonSm({
  w = 16,
  children = null,
}: PropsWithChildren<SkeletonProps>) {
  return (
    <div
      className={clsx(
        'flex h-4 items-center rounded-md bg-slate-200/80',
        'dark:bg-slate-100/5'
      )}
      style={{ width: w }}
    >
      {children}
    </div>
  );
}

export function SkeletonMd({
  w = 24,
  children = null,
}: PropsWithChildren<SkeletonProps>) {
  return (
    <div
      className={clsx(
        'flex h-6 items-center rounded-lg bg-slate-200/80',
        'dark:bg-slate-100/5'
      )}
      style={{ width: w }}
    >
      {children}
    </div>
  );
}
