import clsx from 'clsx';

import { TypeScriptIcon } from '@/components/Icons';
import { SkeletonSm } from '@/components/wireframes/Skeletons';

interface NpmWireframeProps {
  packageName: string;
  description: string;
  isWithTypeScript?: boolean;
}

function NpmWireframe({
  packageName,
  description,
  isWithTypeScript = false,
}: NpmWireframeProps) {
  return (
    <div
      className={clsx(
        'h-full w-full bg-white p-4 text-sm text-slate-600',
        'dark:bg-slate-900 dark:text-slate-400'
      )}
    >
      <div className={clsx('flex items-center gap-2 text-lg font-bold')}>
        {packageName}
        {isWithTypeScript && (
          <div className={clsx('')}>
            <TypeScriptIcon className={clsx('ml-1 h-5 w-5')} />
          </div>
        )}
      </div>
      <div
        className={clsx('mt-2 flex items-center gap-2 text-lg text-slate-400')}
      >
        <SkeletonSm w={60} />
        <div className={clsx('-mt-1')}>&middot;</div>
        <SkeletonSm w={40} />
        <div className={clsx('-mt-1')}>&middot;</div>
        <SkeletonSm w={120} />
      </div>
      <div className={clsx('mt-4')}>
        <div className={clsx('flex')}>
          <div
            className={clsx(
              'flex gap-2 rounded-t-lg border-b-2 border-yellow-400 bg-yellow-50 p-3 px-4',
              'dark:bg-yellow-400/10'
            )}
          >
            <div
              className={clsx(
                'flex h-4 items-center rounded-md bg-yellow-400/50',
                'dark:bg-yellow-400/30'
              )}
              style={{ width: 16 }}
            />
            <div
              className={clsx(
                'flex h-4 items-center rounded-md bg-yellow-400/50',
                'dark:bg-yellow-400/30'
              )}
              style={{ width: 64 }}
            />
          </div>
          <div
            className={clsx('flex gap-2 border-b-2 border-orange-400 p-3 px-4')}
          >
            <SkeletonSm />
            <SkeletonSm w={54} />
          </div>
          <div
            className={clsx('flex gap-2 border-b-2 border-red-400 p-3 px-4')}
          >
            <SkeletonSm />
            <SkeletonSm w={72} />
          </div>
          <div
            className={clsx('flex gap-2 border-b-2 border-purple-400 p-3 px-4')}
          >
            <SkeletonSm />
            <SkeletonSm w={72} />
          </div>
          <div
            className={clsx('flex gap-2 border-b-2 border-sky-400 p-3 px-4')}
          >
            <SkeletonSm />
            <SkeletonSm w={48} />
          </div>
          <div
            className={clsx('flex gap-2 border-b-2 border-red-400 p-3 px-4')}
          >
            <SkeletonSm />
            <SkeletonSm w={48} />
          </div>
        </div>
      </div>
      <div className={clsx('mt-4')}>
        <div
          className={clsx(
            'border-divider-light mt-8 border-l-4 bg-slate-200/40 p-2 px-4',
            'dark:border-divider-dark dark:bg-slate-100/5'
          )}
        >
          <p>{description}</p>
        </div>
        <div
          className={clsx(
            'border-divider-light my-4 border-b',
            'dark:border-divider-dark'
          )}
        />
        <div className={clsx('mt-4 flex flex-col gap-2')}>
          <SkeletonSm w={400} />
          <SkeletonSm w={200} />
        </div>
      </div>
    </div>
  );
}

export default NpmWireframe;
