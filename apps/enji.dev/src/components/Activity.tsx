import clsx from 'clsx';
import Link from 'next/link';

import useContentActivity from '@/hooks/useContentActivity';

import { relativeTime } from '@/helpers/date';

import type { TContentActivity, TContentActivityReaction } from '@/types';

interface ActivityItemProps {
  data: TContentActivity;
}

function ActivityItem({
  data: {
    activityType,
    type,
    slug,
    contentTitle,
    contentType,
    createdAt,
    ...rest
  },
}: ActivityItemProps) {
  if (activityType === 'REACTION') {
    const { count } = rest as Pick<TContentActivityReaction, 'count'>;

    let reactionType = '';
    switch (type) {
      case 'AMAZED':
        reactionType = '😲';
        break;
      case 'CLAPPING':
        reactionType = '👏';
        break;
      case 'THINKING':
        reactionType = '🧐';
        break;
      default:
        break;
    }

    return (
      <div className={clsx('flex flex-wrap items-baseline gap-x-1')}>
        <span>the</span>
        <span
          className={clsx(
            'text-accent-600 font-semibold',
            'dark:text-accent-400'
          )}
        >
          {contentTitle}
        </span>
        <span className={clsx('lowercase')}>
          {contentType.replace('POST', 'BLOG POST')}
        </span>
        <span>received</span>
        <span
          className={clsx(
            'border-divider-dark rounded-md border bg-slate-200 px-1 font-mono text-xs font-bold',
            'dark:border-divider-light dark:bg-slate-800'
          )}
        >
          x{count}
        </span>
        <span>{reactionType}</span>
      </div>
    );
  }

  return (
    <div className={clsx('flex flex-wrap items-baseline gap-x-1')}>
      <span>the</span>
      <span
        className={clsx(
          'text-accent-600 font-semibold',
          'dark:text-accent-400'
        )}
      >
        {contentTitle}
      </span>
      <span className={clsx('lowercase')}>
        {contentType.replace('POST', 'BLOG POST')}
      </span>
      <span>was shared</span>
      {type === 'TWITTER' && <span>to Twitter!</span>}
    </div>
  );
}

interface ActivityProps {
  closeActionCenter?: () => void;
}

function Activity({ closeActionCenter = () => {} }: ActivityProps) {
  const { data } = useContentActivity();

  return (
    <div className={clsx('flex flex-1 flex-col gap-4')}>
      <div className={clsx('text-xl font-bold')}>Latest Activities</div>
      <div
        className={clsx(
          'scrollbar-hide flex flex-1 basis-0 flex-col gap-2 overflow-y-auto'
        )}
      >
        {data.map((activity) => {
          const { createdAt, contentType, slug } = activity;

          const link =
            contentType === 'POST' ? `/blog/${slug}` : `/docs/${slug}`;

          return (
            <Link
              key={createdAt}
              href={link}
              onClick={() => {
                closeActionCenter();
              }}
              className={clsx(
                'border-divider-light rounded-xl border bg-white/40 p-4 text-sm backdrop-blur',
                'dark:border-divider-dark dark:bg-slate-900/60'
              )}
            >
              <div
                className={clsx(
                  'mb-1 flex justify-between text-xs text-slate-600',
                  'dark:text-slate-400'
                )}
              >
                <span>{activity.activityType}</span>
                <span>{relativeTime(activity.createdAt)}</span>
              </div>
              <ActivityItem data={activity} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Activity;
