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
}

const PageHeader = ({ title, desc }: PageHeaderProps) => {
  return (
    <header
      className={clsx(
        'background-grid border-b border-divider-light pt-20 pb-8',
        'md:pb-20 md:pt-36',
        'dark:border-divider-dark'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <motion.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.1 }}
        >
          <h1
            className={clsx(
              'text-[2.5rem] font-extrabold leading-none text-slate-600',
              'md:text-7xl',
              'dark:text-slate-400'
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
                'mt-2 text-lg text-slate-500',
                'md:mt-6 md:text-2xl'
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
