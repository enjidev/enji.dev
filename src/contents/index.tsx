import clsx from 'clsx';

import CleanIntuitive from '@/components/pages/index/CleanIntuitive';
import FeaturedCard from '@/components/pages/index/FeaturedCard';
import Header from '@/components/pages/index/Header';
import Quote from '@/components/pages/index/Quote';
import { CodeIcon, HeartIcon, SparklesIcon } from '@/components/shared/Icons';

function IndexContents() {
  return (
    <>
      <Header />
      <div className={clsx('mb-12', 'md:mb-20')}>
        <div className={clsx('content-wrapper')}>
          <div
            className={clsx(
              '-mt-8 flex flex-col gap-4',
              'lg:-mt-16 lg:flex-row lg:gap-8'
            )}
          >
            <FeaturedCard
              icon={
                <div
                  className={clsx(
                    'rounded-full bg-amber-300 p-3.5',
                    'dark:bg-amber-900'
                  )}
                >
                  <SparklesIcon className={clsx('h-5 w-5 text-white')} />
                </div>
              }
              title="Clean & Intuitive"
              desc="Keep the UI clean with a modern touch without compromising UX."
            />
            <FeaturedCard
              icon={
                <div
                  className={clsx(
                    'rounded-full bg-pink-300 p-3.5',
                    'dark:bg-pink-900'
                  )}
                >
                  <HeartIcon className={clsx('h-5 w-5 text-white')} />
                </div>
              }
              title="Detail Oriented"
              desc="Awareness to ease of access, UI consistency, and improved UX."
            />
            <FeaturedCard
              icon={
                <div
                  className={clsx(
                    'rounded-full bg-sky-300 p-3.5',
                    'dark:bg-sky-900'
                  )}
                >
                  <CodeIcon className={clsx('h-5 w-5 text-white')} />
                </div>
              }
              title="Pretty & Optimized"
              desc="Writing clean code is a top priority while keeping it as optimized as possible."
            />
          </div>
        </div>
      </div>
      <div className={clsx('mb-12', 'md:mb-24')}>
        <div className={clsx('content-wrapper')}>
          <div className={clsx('flex items-center justify-center py-8')}>
            <Quote />
          </div>
        </div>
      </div>
      <div className={clsx('mb-24', 'lg:mb-36')}>
        <CleanIntuitive />
      </div>
    </>
  );
}

export default IndexContents;
