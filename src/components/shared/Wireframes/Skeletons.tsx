import clsx from 'clsx';

interface SkeletonProps {
  /**
   * Skeleton width in pixels.
   */
  w?: number;
  children?: React.ReactNode;
}

export const SkeletonSm = ({ w = 16, children }: SkeletonProps) => {
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
};

export const SkeletonMd = ({ w = 24, children }: SkeletonProps) => {
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
};
