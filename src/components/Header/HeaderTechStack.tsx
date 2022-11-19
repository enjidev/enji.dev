import clsx from 'clsx';
import { motion } from 'framer-motion';
import {
  TypeScriptIcon,
  ReactIcon,
  FramerMotionIcon,
  TailwindCssIcon,
  NextJsIcon,
  FigmaIcon,
  VSCodeIcon,
} from '@/components/Icons';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const HeaderTechStack = () => {
  return (
    <div>
      <motion.p
        className={clsx('mb-2.5 text-sm text-slate-600', 'dark:text-slate-400')}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        current favorite tech stack/tools:
      </motion.p>
      <motion.ul
        className={clsx(
          'flex items-center gap-3.5 text-slate-500',
          'dark:text-slate-500'
        )}
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <motion.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#3178C6]')}>
            <TypeScriptIcon className={clsx('h-6 w-6')} />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#61DAFB]')}>
            <ReactIcon className={clsx('h-6 w-6')} />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#06B6D4]')}>
            <TailwindCssIcon className={clsx('h-6 w-6')} />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#0055FF]')}>
            <FramerMotionIcon className={clsx('h-6 w-6')} />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div
            className={clsx(
              'transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]'
            )}
          >
            <NextJsIcon className={clsx('h-6 w-6')} />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div
            className={clsx('h-3 w-[1px] bg-slate-300 dark:bg-slate-700')}
          ></div>
        </motion.li>
        <motion.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#007ACC]')}>
            <VSCodeIcon className={clsx('h-6 w-6')} />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#F24E1E]')}>
            <FigmaIcon className={clsx('h-6 w-6')} />
          </div>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default HeaderTechStack;
