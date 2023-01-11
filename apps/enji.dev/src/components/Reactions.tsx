import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import EmojiReaction from '@/components/EmojiReaction';
import { ShareIcon } from '@/components/Icons';
import ShareButton from '@/components/ShareButton';

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

function Reactions() {
  const [clapCount, setClapCount] = useState<number>(6);
  const [amazedCount, setAmazedCount] = useState<number>(199);
  const [sharedCount, setSharedCount] = useState<number>(7);

  return (
    <div
      className={clsx(
        'border-divider-light pointer-events-auto relative flex items-center justify-between rounded-full border bg-white/70 p-2 backdrop-blur',
        'dark:border-divider-dark dark:bg-slate-900/80'
      )}
    >
      <div className={clsx('flex items-center gap-1')}>
        <EmojiReaction
          title="Claps"
          defaultImage="/assets/emojis/clapping-hands.png"
          animatedImage="/assets/emojis/clapping-hands-animated.png"
          onClick={() => {
            setClapCount((current) => current + 1);
          }}
        />
        <EmojiReaction
          title="Wow"
          defaultImage="/assets/emojis/astonished-face.png"
          animatedImage="/assets/emojis/astonished-face-animated.png"
          onClick={() => {
            setAmazedCount((current) => current + 1);
          }}
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
        <div className={clsx('hidden', 'sm:block')}>
          <ReactionCounter count={sharedCount}>
            <ShareIcon className={clsx('h-3 w-3')} />
          </ReactionCounter>
        </div>
      </div>
      <ShareButton
        onItemClick={() => {
          setSharedCount((current) => current + 1);
        }}
      />
    </div>
  );
}

export default Reactions;
