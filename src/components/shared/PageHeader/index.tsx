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
  description?: string;
  caption?: string;
}

const PageHeader = ({ title, description, caption }: PageHeaderProps) => {
  return (
    <header
      id="page-header"
      className={clsx(
        'background-grid background-grid--fade-out z-[900] mb-10 border-b border-divider-light pt-36 pb-6',
        'md:mb-0 md:border-none md:pb-20 md:pt-52',
        'dark:border-divider-dark'
      )}
    >
      <div className={clsx('content-wrapper')}>
        {caption && (
          <motion.div
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0 }}
          >
            <span
              className={clsx(
                'mb-2 block text-sm font-bold leading-none',
                'md:text-base',
                [
                  caption === 'Work'
                    ? ['text-secondary-600', 'dark:text-secondary-400']
                    : ['text-primary-600', 'dark:text-primary-400'],
                ]
              )}
            >
              {caption}
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
        {description && (
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
              {description}
            </p>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
