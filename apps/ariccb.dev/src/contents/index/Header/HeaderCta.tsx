import clsx from 'clsx';
import { m, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

import { DocumentIcon } from '@/components/Icons';
import AccentDemo from '@/components/mdx/AccentDemo';

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

function ButtonContactMe() {
  return (
    <Link
      href="/work/contact"
      className={clsx(
        'button button--solid min-w-[128px]',
        'shadow',
        'md:button--big'
      )}
    >
      Get in Touch
    </Link>
  );
}

function ChangeColor() {
  return (
    <button
      type="button"
      className={clsx(
        'button button--solid',
        'shadow',
        'md:button--big md:my-0 md:inline-block'
      )}
    >
      <AccentDemo />
    </button>
  );
}

function ButtonResume() {
  return (
    <a
      target="_blank"
      rel="noreferrer nofollow"
      href="/assets/resumes/Aric_Crosson_Bouwers_-_2026-06-03_Resume.pdf"
      download
      className={clsx(
        'button button--ghost px-2 text-amber-600',
        'md:button--big md:px-2'
      )}
    >
      <DocumentIcon className={clsx('h-5 w-5')} />
      RESUME
    </a>
  );
}

function AvailableForHire() {
  return (
    <div
      className={clsx(
        'button button--ghost text-accent-500 pointer-events-none gap-2.5 px-2.5',
        'md:button--big md:px-2.5',
        'dark:text-accent-400'
      )}
    >
      <span className={clsx('relative flex h-2 w-2')}>
        <span
          className={clsx(
            'bg-accent-600 absolute -left-1 -top-1 inline-flex h-4 w-4 animate-ping rounded-full opacity-75',
            'dark:bg-accent-300'
          )}
        />
        <span
          className={clsx(
            'bg-accent-500 relative inline-flex h-2 w-2 rounded-full',
            'dark:bg-accent-400'
          )}
        />
      </span>
      AVAILABLE FOR HIRE
    </div>
  );
}

function HeaderCta({
  isFree = true,
  isFreeAnimationDuration = 4,
}: HeaderCtaProps) {
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
    <>
      <m.div className={clsx('flex gap-2')} initial="hide" animate="show">
        <m.div
          className={clsx('relative z-20')}
          variants={animation}
          transition={{ delay: 0.4 }}
        >
          <ButtonContactMe />
        </m.div>
        {isFree ? (
          <m.div
            variants={animation}
            transition={{ delay: 2.8 }}
            className={clsx('relative z-10 flex')}
          >
            <m.div
              variants={isFreeVariants}
              transition={{
                delay: isFreeAnimationDuration + 1.5,
                duration: 0.4,
              }}
            >
              <AvailableForHire />
            </m.div>
            <m.div
              className={clsx('absolute left-0 top-0')}
              initial={{ x: -48, opacity: 0, pointerEvents: 'none' }}
              animate={{ x: 0, opacity: 1, pointerEvents: 'auto' }}
              transition={{
                delay: isFreeAnimationDuration + 1.6,
                duration: 0.4,
              }}
            >
              <ButtonResume />
            </m.div>
          </m.div>
        ) : (
          <m.div>
            <m.div variants={animation} transition={{ delay: 0.5 }}>
              <ButtonResume />
            </m.div>
          </m.div>
        )}
      </m.div>
      <m.div
        className={clsx('top-20 mx-0')}
        initial={{ y: 40, opacity: 0, pointerEvents: 'none' }}
        animate={{ y: 10, opacity: 1, pointerEvents: 'auto' }}
        transition={{ delay: isFreeAnimationDuration + 4, duration: 1.2 }}
      >
        <ChangeColor />
      </m.div>
    </>
  );
}

export default HeaderCta;
