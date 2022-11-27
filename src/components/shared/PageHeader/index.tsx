import clsx from 'clsx';
import { motion } from 'framer-motion';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface PageHeaderProps {
  title: string;
  desc?: string;
  context?: string;
}

const PageHeader = ({ title, desc, context }: PageHeaderProps) => {
  return (
    <header
      className={clsx(
        'background-grid background-grid--fade-out pt-20 pb-8',
        'md:pb-20 md:pt-36'
      )}
    >
      <div className={clsx('content-wrapper')}>
        {context && (
          <motion.div
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0 }}
          >
            <span
              className={clsx(
                'mb-2 block text-base font-bold leading-none text-secondary-600',
                'dark:text-secondary-400'
              )}
            >
              {context}
            </span>
          </motion.div>
        )}
        <motion.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.1 }}
        >
          <h1
            className={clsx(
              'text-[2.5rem] font-extrabold leading-none text-slate-700',
              'md:text-7xl',
              'dark:text-slate-300'
            )}
          >
            {title}
          </h1>
        </motion.div>
        {desc && (
          <motion.div
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.2 }}
          >
            <p
              className={clsx(
                'mt-2 text-lg text-slate-600',
                'md:mt-6 md:text-2xl lg:max-w-[500px] xl:max-w-[700px]',
                'dark:text-slate-400'
              )}
            >
              {desc}
            </p>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
