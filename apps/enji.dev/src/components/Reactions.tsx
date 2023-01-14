import { ShareType } from '@prisma/client';
import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';
import { useEffect, useReducer } from 'react';

import EmojiReaction from '@/components/EmojiReaction';
import ShareButton from '@/components/ShareButton';

import { postReaction, postShare } from '@/helpers/api';

import {
  createInitialState,
  ReactionsActions,
  reducer,
} from '@/reducers/reactions';

import type {
  ReactionsAction,
  ReactionsInitializer,
  ReactionsState,
} from '@/reducers/reactions';
import type { TContentMetaDetail } from '@/types';
import type { PropsWithChildren, Reducer } from 'react';

interface CounterProps {
  count: number;
}

function Counter({ count }: CounterProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    const startMotion = async () => {
      await controls.start({
        y: [-20, 0],
        transition: {
          duration: 0.18,
        },
      });
    };

    if (count !== 0) {
      startMotion();
    }
  }, [count, controls]);

  return count === 0 ? (
    <span className={clsx('flex flex-col font-mono text-sm')}>
      <span className={clsx('flex h-5 items-center')}>0</span>
    </span>
  ) : (
    <m.span
      className={clsx(
        'flex flex-col font-mono text-sm font-bold text-slate-600',
        'dark:text-slate-300'
      )}
      animate={controls}
    >
      <span className={clsx('flex h-5 items-center')}>&nbsp;</span>
      <span className={clsx('flex h-5 items-center')}>{count}</span>
      <span className={clsx('flex h-5 items-center')}>{count - 1}</span>
    </m.span>
  );
}

type ReactionCounterProps = PropsWithChildren<CounterProps>;

function ReactionCounter({ count, children = null }: ReactionCounterProps) {
  return (
    <div
      className={clsx(
        'relative flex h-6 items-center gap-1 overflow-hidden rounded-full bg-slate-200 py-1 px-2',
        'dark:bg-[#1d263a]'
      )}
    >
      {children}
      <Counter count={count} />
    </div>
  );
}

type ReactionsProps = TContentMetaDetail & {
  slug: string;
};

function Reactions({ slug, meta, metaUser }: ReactionsProps) {
  const [
    {
      clapping,
      thinking,
      amazed,
      shares,
      clappingQuota,
      thinkingQuota,
      amazedQuota,
    },
    dispatch,
  ] = useReducer<
    Reducer<ReactionsState, ReactionsAction>,
    ReactionsInitializer
  >(reducer, { meta, metaUser }, createInitialState);

  const handleBatchClap = (count: number) => {
    postReaction({
      slug,
      type: 'CLAPPING',
      count,
      section: undefined,
    });
  };

  const handleBatchAmazed = (count: number) => {
    postReaction({
      slug,
      type: 'AMAZED',
      count,
      section: undefined,
    });
  };

  const handleBatchThinking = (count: number) => {
    postReaction({
      slug,
      type: 'THINKING',
      count,
      section: undefined,
    });
  };

  const handleShare = (type: ShareType) => {
    postShare({
      slug,
      type,
    });
  };

  return (
    <div
      className={clsx(
        'border-divider-light pointer-events-auto relative flex items-center justify-between rounded-xl border bg-white/70 p-4 backdrop-blur',
        'dark:border-divider-dark dark:bg-slate-900/80'
      )}
    >
      <div className={clsx('flex items-center gap-4')}>
        <div className={clsx('flex flex-col items-center gap-2')}>
          <EmojiReaction
            disabled={clappingQuota <= 0}
            title="Claps"
            defaultImage="/assets/emojis/clapping-hands.png"
            animatedImage="/assets/emojis/clapping-hands-animated.png"
            disabledImage="/assets/emojis/love-you-gesture.png"
            onClick={() => {
              dispatch({
                type: ReactionsActions.INCREASE_CLAPPING,
              });
              dispatch({
                type: ReactionsActions.DECREASE_CLAPPING_QUOTA,
              });
            }}
            onBatchClick={handleBatchClap}
          />
          <ReactionCounter count={clapping} />
        </div>
        <div className={clsx('flex flex-col items-center gap-2')}>
          <EmojiReaction
            disabled={amazedQuota <= 0}
            title="Wow"
            defaultImage="/assets/emojis/astonished-face.png"
            animatedImage="/assets/emojis/astonished-face-animated.png"
            disabledImage="/assets/emojis/star-struck.png"
            onClick={() => {
              dispatch({
                type: ReactionsActions.INCREASE_AMAZED,
              });
              dispatch({
                type: ReactionsActions.DECREASE_AMAZED_QUOTA,
              });
            }}
            onBatchClick={handleBatchAmazed}
          />
          <ReactionCounter count={amazed} />
        </div>
        <div className={clsx('flex flex-col items-center gap-2')}>
          <EmojiReaction
            disabled={thinkingQuota <= 0}
            title="Hmm"
            defaultImage="/assets/emojis/face-with-monocle.png"
            animatedImage="/assets/emojis/face-with-monocle-animated.png"
            disabledImage="/assets/emojis/nerd-face.png"
            onClick={() => {
              dispatch({
                type: ReactionsActions.INCREASE_THINKING,
              });
              dispatch({
                type: ReactionsActions.DECREASE_THINKING_QUOTA,
              });
            }}
            onBatchClick={handleBatchThinking}
          />
          <ReactionCounter count={thinking} />
        </div>
      </div>
      <div className={clsx('flex flex-col items-center gap-2')}>
        <ShareButton
          onItemClick={(type) => {
            dispatch({
              type: ReactionsActions.INCREASE_SHARES,
            });
            handleShare(type);
          }}
        />
        <ReactionCounter count={shares} />
      </div>
    </div>
  );
}

export default Reactions;
