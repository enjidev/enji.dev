import clsx from 'clsx';

interface SkeletonSmallProps {
  /**
   * Skeleton width in pixels.
   */
  w?: number;
}

export const SkeletonSmall = ({ w = 16 }: SkeletonSmallProps) => {
  return (
    <div
      className={clsx('h-4 rounded-md bg-slate-200', 'dark:bg-slate-200/10')}
      style={{ width: w }}
    />
  );
};
