import clsx from 'clsx';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { DocumentIcon } from '@/components/shared/Icons';

const animation = {
  hide: {
    x: -16,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface HeaderCtaProps {
  isFree?: boolean;
  isFreeAnimationDuration?: number;
}

const ButtonContactMe = () => {
  return (
    <Link
      href="/contact"
      className={clsx('button button--solid min-w-[128px]', 'md:button--big')}
    >
      Contact Me
    </Link>
  );
};

const ButtonResume = () => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.figma.com/community/file/1176377524040948926"
      className={clsx('button button--ghost px-2', 'md:button--big md:px-2')}
    >
      <DocumentIcon className={clsx('h-5 w-5')} />
      RESUME
    </a>
  );
};

const AvailableForHire = () => {
  return (
    <div
      className={clsx(
        'button button--ghost pointer-events-none gap-2.5 px-2.5 text-primary-500',
        'md:button--big md:px-2.5',
        'dark:text-primary-400'
      )}
    >
      <span className={clsx('relative flex h-2 w-2')}>
        <span
          className={clsx(
            'absolute -top-1 -left-1 inline-flex h-4 w-4 animate-ping rounded-full bg-primary-600 opacity-75',
            'dark:bg-primary-300'
          )}
        ></span>
        <span
          className={clsx(
            'relative inline-flex h-2 w-2 rounded-full bg-primary-500',
            'dark:bg-primary-400'
          )}
        ></span>
      </span>
      AVAILABLE FOR HIRE
    </div>
  );
};

const HeaderCta = ({
  isFree = true,
  isFreeAnimationDuration = 4,
}: HeaderCtaProps) => {
  const shouldReduceMotion = useReducedMotion();

  let isFreeVariants = {
    hide: {
      x: 0,
      opacity: 1,
    },
    show: {
      x: -48,
      opacity: 0,
    },
  };

  if (shouldReduceMotion) {
    isFreeVariants = {
      hide: {
        x: 0,
        opacity: 1,
      },
      show: {
        x: 0,
        opacity: 0,
      },
    };
  }

  return (
    <motion.div className={clsx('flex gap-2')} initial="hide" animate="show">
      <motion.div
        className={clsx('relative z-20')}
        variants={animation}
        transition={{ delay: 0.4 }}
      >
        <ButtonContactMe />
      </motion.div>
      {isFree ? (
        <motion.div
          variants={animation}
          transition={{ delay: 1.5 }}
          className={clsx('relative z-10')}
        >
          <motion.div
            variants={isFreeVariants}
            transition={{ delay: isFreeAnimationDuration + 1.5, duration: 0.4 }}
          >
            <AvailableForHire />
          </motion.div>
          <motion.div
            className={clsx('absolute top-0 left-0')}
            initial={{ x: -48, opacity: 0, pointerEvents: 'none' }}
            animate={{ x: 0, opacity: 1, pointerEvents: 'auto' }}
            transition={{ delay: isFreeAnimationDuration + 1.6, duration: 0.4 }}
          >
            <ButtonResume />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div variants={animation} transition={{ delay: 0.5 }}>
          <ButtonResume />
        </motion.div>
      )}
    </motion.div>
  );
};

export default HeaderCta;
