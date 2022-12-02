import clsx from 'clsx';

interface HeroTitleProps {
  title: string;
  caption: string;
  description: string | React.ReactNode;
}

const HeroTitle = ({ title, caption, description }: HeroTitleProps) => {
  return (
    <div className={clsx('content-wrapper')}>
      <span
        className={clsx(
          'mb-2 block font-black text-accent-600',
          'lg:mb-4',
          'dark:text-accent-400'
        )}
      >
        {caption}
      </span>
      <h2
        className={clsx(
          'mb-4 text-3xl font-black text-slate-700',
          'lg:text-4xl',
          'dark:text-slate-200'
        )}
      >
        {title}
      </h2>
      <div className={clsx('max-w-md text-slate-600', 'dark:text-slate-400')}>
        {description}
      </div>
    </div>
  );
};

export default HeroTitle;
