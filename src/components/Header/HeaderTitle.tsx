import { motion } from 'framer-motion';
import Image from 'next/image';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const HeaderTitle = () => {
  return (
    <div>
      <motion.div
        className="flex items-center gap-2 text-2xl text-slate-500 dark:text-slate-500 md:text-4xl"
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
          animate={{
            opacity: 1,
            y: 0,
            rotate: 0,
          }}
          transition={{
            type: 'spring',
            delay: 0.35,
            bounce: 0.7,
            duration: 0.7,
          }}
        >
          <Image
            className="w-7 md:w-10"
            alt="Love-you Gesture"
            src="/assets/emojis/love-you-gesture.png"
            width={48}
            height={48}
          />
        </motion.div>
      </motion.div>
      <h1 className="text-slate-600 dark:text-slate-400">
        <motion.span
          className="mb-2 block text-4xl font-bold md:mb-4 md:text-7xl"
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          i&apos;m{' '}
          <strong className="font-extrabold text-slate-900 dark:text-slate-50">
            énji
          </strong>{' '}
          kusnadi,
        </motion.span>
        <motion.span
          className="block  text-lg md:text-2xl"
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          a <strong className="font-bold">creative developer</strong>.
        </motion.span>
      </h1>
    </div>
  );
};

export default HeaderTitle;
