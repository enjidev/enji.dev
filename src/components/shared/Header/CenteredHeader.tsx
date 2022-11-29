import clsx from 'clsx';
import { motion } from 'framer-motion';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface BlogHeaderProps {
  title: string;
  description: string;
}

const BlogHeader = ({ title, description }: BlogHeaderProps) => {
  return (
    <header
      id="page-header"
      className={clsx(
        'background-grid background-grid--fade-out z-[900] mb-10 border-b border-divider-light pt-32 pb-12',
        'md:mb-0 md:border-none md:pb-20 md:pt-44',
        'dark:border-divider-dark'
      )}
    >
      <div className={clsx('content-wrapper text-center')}>
        <motion.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.1 }}
        >
          <h1
            className={clsx(
              'text-[2.5rem] font-extrabold leading-tight text-slate-700',
              'md:text-7xl md:leading-snug',
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
                'mx-auto mt-2 text-center text-lg text-slate-600',
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

export default BlogHeader;
