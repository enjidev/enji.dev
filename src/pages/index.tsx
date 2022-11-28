import clsx from 'clsx';
import Head from 'next/head';
import Quote from '@/components/pages/index/Quote';
import Header from '@/components/pages/index/Header';
import FeaturedCard from '@/components/pages/index/FeaturedCard';
import Hero from '@/components/pages/index/Hero';
import { SparklesIcon, HeartIcon, CodeIcon } from '@/components/shared/Icons';

import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Enji Kusnadi &middot; Creative Developer</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className={clsx('mb-12', 'md:mb-20')}>
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
      </section>
      <section className={clsx('mb-12', 'md:mb-24')}>
        <div className={clsx('content-wrapper')}>
          <div className={clsx('flex items-center justify-center py-8')}>
            <Quote />
          </div>
        </div>
      </section>
      <section className={clsx('mb-24', 'lg:mb-36')}>
        <Hero />
      </section>
    </>
  );
};

export default Index;
