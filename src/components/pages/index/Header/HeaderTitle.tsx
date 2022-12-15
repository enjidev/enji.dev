import clsx from 'clsx';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTitle() {
  const controls = useAnimationControls();

  return (
    <div>
      <motion.div
        className={clsx(
          'flex items-center gap-1 text-2xl text-slate-600',
          'md:gap-2 md:text-4xl',
          'dark:text-slate-400'
        )}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        hi!
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
            rotate: 30,
            transformOrigin: 'right center',
          }}
          animate={controls}
          transition={{
            type: 'spring',
            delay: 0.35,
            bounce: 0.7,
            duration: 0.7,
          }}
        >
          <Image
            className={clsx('w-7 md:w-10')}
            alt="Love-you Gesture"
            src="/assets/emojis/love-you-gesture.png"
            width={48}
            height={48}
            onLoadingComplete={() => {
              controls.start({
                opacity: 1,
                y: 0,
                rotate: 0,
              });
            }}
          />
        </motion.div>
      </motion.div>
      <h1 className={clsx('text-slate-700', 'dark:text-slate-300')}>
        <motion.span
          className={clsx(
            'mb-2 block text-[2.5rem] font-[1000] leading-none',
            'md:mb-4 md:text-7xl'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          I&apos;m{' '}
          <strong className={clsx('text-accent-600', 'dark:text-accent-500')}>
            Enji
          </strong>{' '}
          Kusnadi,{' '}
        </motion.span>
        <motion.span
          className={clsx('block text-lg', 'md:text-2xl')}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          a <strong className={clsx('font-bold')}>creative developer</strong>.
        </motion.span>
      </h1>
    </div>
  );
}

export default HeaderTitle;
