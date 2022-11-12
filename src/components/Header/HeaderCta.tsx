import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { DocumentIcon } from '@/components/Icons';

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
    <Link href="/" className="button button--solid button--big min-w-[128px]">
      Contact Me
    </Link>
  );
};

const ButtonResume = () => {
  return (
    <Link href="/" className="button button--ghost button--big px-2">
      <DocumentIcon className="h-5 w-5" />
      RESUME
    </Link>
  );
};

const HeaderCta = ({
  isFree = true,
  isFreeAnimationDuration = 5,
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
    <motion.div className="flex gap-2" initial="hide" animate="show">
      <motion.div
        className="relative z-20"
        variants={animation}
        transition={{ delay: 0.4 }}
      >
        <ButtonContactMe />
      </motion.div>
      {isFree ? (
        <motion.div
          variants={animation}
          transition={{ delay: 0.5 }}
          className="relative z-10"
        >
          <motion.div
            className="relative"
            variants={isFreeVariants}
            transition={{ delay: isFreeAnimationDuration, duration: 0.4 }}
          >
            <span className="absolute left-3 top-3 flex h-2 w-2">
              <span className="absolute -top-1 -left-1 inline-flex h-4 w-4 animate-ping rounded-full bg-primary-400 opacity-75 dark:bg-primary-300"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500 dark:bg-primary-200"></span>
            </span>
            <div className="button button--ghost button--big pointer-events-none text-primary-400 dark:text-primary-200">
              AVAILABLE FOR HIRE
            </div>
          </motion.div>
          <motion.div
            className="absolute top-0 left-0"
            initial={{ x: -48, opacity: 0, pointerEvents: 'none' }}
            animate={{ x: 0, opacity: 1, pointerEvents: 'auto' }}
            transition={{ delay: isFreeAnimationDuration, duration: 0.4 }}
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
