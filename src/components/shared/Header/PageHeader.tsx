import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface PageHeaderProps {
  title: string;
  description: string;
  caption?: string;
}

function PageHeader({ title, description, caption = '' }: PageHeaderProps) {
  return (
    <header
      id="page-header"
      className={clsx(
        'background-grid background-grid--fade-out z-[900] mb-10 border-b border-divider-light pt-32 pb-10',
        'md:mb-0 md:border-none md:pb-20 md:pt-40',
        'dark:border-divider-dark'
      )}
    >
      <div className={clsx('content-wrapper')}>
        {caption && (
          <m.div
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0 }}
          >
            <span
              className={clsx(
                'mb-1 block text-lg font-extrabold capitalize leading-none text-accent-600',
                'md:mb-0 md:text-2xl',
                'dark:text-accent-400'
              )}
            >
              {caption}
            </span>
          </m.div>
        )}
        <m.div
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
        </m.div>
        <m.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          <p
            className={clsx(
              'mt-4 text-lg text-slate-600',
              'md:mt-6 md:text-2xl lg:max-w-[500px] xl:max-w-[700px]',
              'dark:text-slate-400'
            )}
          >
            {description}
          </p>
        </m.div>
      </div>
    </header>
  );
}

export default PageHeader;
