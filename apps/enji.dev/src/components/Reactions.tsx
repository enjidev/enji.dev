import { ShareType } from '@prisma/client';
import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import EmojiReaction from '@/components/EmojiReaction';
import { ShareIcon } from '@/components/Icons';
import ShareButton from '@/components/ShareButton';

import { addReaction, addShare } from '@/helpers/api';

import { MAX_REACTIONS_PER_SESSION } from '@/constants/app';

import type { TContentMetaDetail } from '@/types';
import type { PropsWithChildren } from 'react';

interface CounterProps {
  count: number;
}

function Counter({ count }: CounterProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    const startMotion = async () => {
      controls.set({ y: -20 });
      await controls.start({
        y: [-20, 0],
        transition: {
          duration: 0.18,
        },
      });
      controls.set({ y: 0 });
    };

    startMotion();
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
        'relative flex h-6 items-center gap-1 overflow-hidden rounded-full bg-slate-200 py-1 pl-2 pr-2.5',
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
  const [clapCount, setClapCount] = useState<number>(
    meta.reactionsDetail.CLAPPING
  );
  const [amazedCount, setAmazedCount] = useState<number>(
    meta.reactionsDetail.AMAZED
  );
  const [sharedCount, setSharedCount] = useState<number>(meta.shares);

  const [clapQuota, setClapQuota] = useState<number>(
    MAX_REACTIONS_PER_SESSION - metaUser.reactionsDetail.CLAPPING
  );

  const [amazedQuota, setAmazedQuota] = useState<number>(
    MAX_REACTIONS_PER_SESSION - metaUser.reactionsDetail.AMAZED
  );

  const handleBatchClap = (count: number) => {
    addReaction({
      slug,
      type: 'CLAPPING',
      count,
      section: undefined,
    });
  };

  const handleBatchAmazed = (count: number) => {
    addReaction({
      slug,
      type: 'AMAZED',
      count,
      section: undefined,
    });
  };

  const handleShare = (type: ShareType) => {
    addShare({
      slug,
      type,
    });
  };

  return (
    <div
      className={clsx(
        'border-divider-light pointer-events-auto relative flex items-center justify-between rounded-full border bg-white/70 p-2 backdrop-blur',
        'dark:border-divider-dark dark:bg-slate-900/80'
      )}
    >
      <div className={clsx('flex items-center gap-4')}>
        <div className={clsx('flex items-center gap-1 pl-2')}>
          <EmojiReaction
            disabled={clapQuota <= 0}
            title="Claps"
            defaultImage="/assets/emojis/clapping-hands.png"
            animatedImage="/assets/emojis/clapping-hands-animated.png"
            disabledImage="/assets/emojis/love-you-gesture.png"
            onClick={() => {
              setClapCount((current) => current + 1);
              setClapQuota((current) => current - 1);
            }}
            onBatchClick={handleBatchClap}
          />
          <EmojiReaction
            disabled={amazedQuota <= 0}
            title="Wow"
            defaultImage="/assets/emojis/astonished-face.png"
            animatedImage="/assets/emojis/astonished-face-animated.png"
            disabledImage="/assets/emojis/star-struck.png"
            onClick={() => {
              setAmazedCount((current) => current + 1);
              setAmazedQuota((current) => current - 1);
            }}
            onBatchClick={handleBatchAmazed}
          />
        </div>
        <div className={clsx('flex items-center gap-2')}>
          <ReactionCounter count={clapCount}>
            <Image
              className={clsx('h-4 w-4 select-none')}
              alt="Claps"
              src="/assets/emojis/clapping-hands.png"
              width={48}
              height={48}
              quality={100}
              priority
            />
          </ReactionCounter>
          <ReactionCounter count={amazedCount}>
            <Image
              className={clsx('h-4 w-4 select-none')}
              alt="Amazed"
              src="/assets/emojis/astonished-face.png"
              width={48}
              height={48}
              quality={100}
              priority
            />
          </ReactionCounter>
        </div>
      </div>
      <div className={clsx('flex items-center gap-4')}>
        <div className={clsx('hidden', 'sm:block')}>
          <ReactionCounter count={sharedCount}>
            <ShareIcon className={clsx('h-3 w-3')} />
          </ReactionCounter>
        </div>
        <ShareButton
          onItemClick={(type) => {
            setSharedCount((current) => current + 1);
            handleShare(type);
          }}
        />
      </div>
    </div>
  );
}

export default Reactions;
