import clsx from 'clsx';
import { SkeletonSmall } from '@/components/shared/Wireframes/Skeletons';

interface GithubWireframeProps {
  repository: string;
  description: string;
}

const GitHubWireframe = ({ repository, description }: GithubWireframeProps) => {
  return (
    <div
      className={clsx(
        'bg-white p-8 text-sm text-slate-600',
        'dark:bg-slate-900 dark:text-slate-400'
      )}
    >
      <div className={clsx('flex items-center gap-1')}>
        <SkeletonSmall />
        <SkeletonSmall w={96} />
        <div className={clsx('-mt-0.5')}>/</div>
        <div
          className={clsx(
            '-mt-0.5 font-bold text-blue-700',
            'dark:font-semibold dark:text-blue-500'
          )}
        >
          {repository}
        </div>
        <div
          className={clsx(
            'ml-1 rounded-full border border-divider-light px-2 py-0.5 text-xs',
            'dark:border-divider-dark'
          )}
        >
          public
        </div>
      </div>
      <div className={clsx('mt-2')}>
        <p>{description}</p>
      </div>
      <div className={clsx('mt-6 flex flex-col gap-3')}>
        <div className={clsx('flex items-center gap-1')}>
          <SkeletonSmall />
          <SkeletonSmall w={64} />
        </div>
        <div className={clsx('flex items-center gap-3')}>
          <div className={clsx('flex items-center gap-1')}>
            <SkeletonSmall />
            <SkeletonSmall w={48} />
          </div>
          <div className={clsx('flex items-center gap-1')}>
            <SkeletonSmall />
            <SkeletonSmall w={56} />
          </div>
        </div>
      </div>
      <div className={clsx('mt-6 flex gap-2')}>
        <div
          className={clsx(
            'flex h-8 flex-1 items-center justify-center rounded-lg border border-divider-light',
            'dark:border-divider-dark'
          )}
        >
          <div className={clsx('flex items-center gap-1')}>
            <SkeletonSmall />
            <SkeletonSmall w={48} />
          </div>
        </div>
        <div
          className={clsx(
            'flex h-8 flex-1 items-center justify-center rounded-lg border border-divider-light',
            'dark:border-divider-dark'
          )}
        >
          <div className={clsx('flex items-center gap-1')}>
            <SkeletonSmall />
            <SkeletonSmall w={64} />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'mt-6 flex border-b border-divider-light',
          'dark:border-divider-dark'
        )}
      >
        <div className={clsx('-mb-[2px] flex h-10')}>
          <div
            className={clsx(
              'flex items-center gap-1 border-b-[3px] border-amber-500 px-6 dark:border-amber-700'
            )}
          >
            <SkeletonSmall />
            <SkeletonSmall w={32} />
          </div>
        </div>
        <div className={clsx('-mb-[2px] flex h-10')}>
          <div
            className={clsx(
              'flex items-center gap-1 border-b-[3px] border-transparent px-6'
            )}
          >
            <SkeletonSmall />
            <SkeletonSmall w={40} />
          </div>
        </div>
        <div className={clsx('-mb-[2px] flex h-10')}>
          <div
            className={clsx(
              'flex items-center gap-1 border-b-[3px] border-transparent px-6'
            )}
          >
            <SkeletonSmall />
            <SkeletonSmall w={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubWireframe;
