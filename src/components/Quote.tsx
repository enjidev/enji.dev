import { QuoteIcon } from '@/components/Icons';

const Quote = () => {
  return (
    <blockquote className="flex gap-2 pt-2 text-2xl text-slate-500 dark:text-slate-400 lg:pt-0 lg:text-5xl">
      <QuoteIcon className="-mt-5 h-16 text-slate-300 dark:text-slate-800 lg:h-24" />
      <div className="flex flex-col">
        <span className="leading-[1.15]">
          <em>beautiful</em>
        </span>
        <span className="flex items-center gap-2 leading-[1.15] lg:gap-4">
          <span className="mt-1 h-0.5 w-8 bg-slate-400 dark:bg-slate-600 lg:h-1 lg:w-24"></span>
          <span>
            <strong className="font-extrabold text-slate-600 dark:text-slate-300">
              inside
            </strong>{' '}
            and{' '}
            <strong className="font-extrabold text-slate-600 dark:text-slate-300">
              out
            </strong>
          </span>
          <span className="mt-1 h-0.5 w-6 bg-slate-400 dark:bg-slate-600 lg:h-1 lg:w-14"></span>
        </span>
        <span className="leading-[1.15]">
          is a{' '}
          <strong className="relative font-extrabold text-slate-600 dark:text-slate-300">
            <span className="absolute -left-0.5 right-0 top-1 bottom-0 z-[-1] bg-slate-100 px-1 dark:bg-slate-800 lg:-left-1.5 lg:-right-0.5 lg:top-2 lg:bottom-0"></span>
            must.
          </strong>
        </span>
      </div>
    </blockquote>
  );
};

export default Quote;
