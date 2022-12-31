import clsx from 'clsx';

import CleanIntuitive from '@/components/pages/index/CleanIntuitive';
import DetailOriented from '@/components/pages/index/DetailOriented';
import FeaturedCard from '@/components/pages/index/FeaturedCard';
import Header from '@/components/pages/index/Header';
import PrettyOptimized from '@/components/pages/index/PrettyOptimized';
import Quote from '@/components/pages/index/Quote';
import { CodeIcon, HeartIcon, SparklesIcon } from '@/components/shared/Icons';

function FeaturedCardSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex flex-col gap-4', 'lg:flex-row lg:gap-8')}>
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
  );
}

function QuoteSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex items-center justify-center py-8')}>
        <Quote />
      </div>
    </div>
  );
}

function IndexContents() {
  return (
    <>
      <Header />
      <div className={clsx('mb-12 -mt-8', 'md:mb-20 lg:-mt-16')}>
        <FeaturedCardSection />
      </div>
      <div className={clsx('mb-12', 'md:mb-24')}>
        <QuoteSection />
      </div>
      <div className={clsx('mb-12', 'lg:mb-24')}>
        <CleanIntuitive />
      </div>
      <div className={clsx('mb-12', 'lg:mb-24')}>
        <DetailOriented />
      </div>
      <div className={clsx('mb-12', 'lg:mb-24')}>
        <PrettyOptimized />
      </div>
    </>
  );
}

export default IndexContents;
