import Head from 'next/head';
import Quote from '@/components/Quote';
import Header from '@/components/Header';
import FeaturedCard from '@/components/FeaturedCard';
import { SparklesIcon, HeartIcon, CodeIcon } from '@/components/Icons';

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
      <section>
        <div className="content-wrapper">
          <div className="-mt-8 mb-8 flex flex-col gap-4 lg:-mt-16 lg:flex-row lg:gap-8">
            <FeaturedCard
              icon={
                <div className="rounded-full bg-orange-400 p-4 highlight-orange-500 dark:bg-orange-600">
                  <SparklesIcon className="h-5 w-5 text-white" />
                </div>
              }
              title="Clean & Intuitive"
              desc="Keep the UI clean with a modern touch without compromising on the UX."
            />
            <FeaturedCard
              icon={
                <div className="rounded-full bg-pink-400 p-4 highlight-pink-500 dark:bg-pink-600">
                  <HeartIcon className="h-5 w-5 text-white" />
                </div>
              }
              title="Detail Oriented"
              desc="Attention to ease of access, UI consistency, and improved user experience."
            />
            <FeaturedCard
              icon={
                <div className="rounded-full bg-sky-400 p-4 highlight-sky-500 dark:bg-sky-600">
                  <CodeIcon className="h-5 w-5 text-white" />
                </div>
              }
              title="Pretty & Optimized"
              desc="Writing clean code is a top priority while keeping it as optimized as possible."
            />
          </div>
        </div>
      </section>
      <section className="mb-6">
        <div className="content-wrapper">
          <div className="flex items-center justify-center py-8">
            <Quote />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
