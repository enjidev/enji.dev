import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  TypeScriptIcon,
  ReactIcon,
  TailwindCssIcon,
  NextJsIcon,
  FigmaIcon,
  SparklesIcon,
  HeartIcon,
  BoltIcon,
  DocumentIcon,
  VSCodeIcon,
} from '@/components/Icons';

import type { NextPage } from 'next';
import type { ReactElement } from 'react';

interface FeaturedCardProps {
  icon: ReactElement;
  title: string;
  desc: string;
}

const FeaturedCard = ({ icon, title, desc }: FeaturedCardProps) => {
  return (
    <div className="relative z-10 flex-1 rounded-2xl border border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="absolute inset-x-0 inset-y-10 z-[-1] border-t border-slate-100 dark:border-slate-800"></div>
      <div className="absolute inset-y-0 inset-x-10 z-[-1] border-l border-slate-100 dark:border-slate-800"></div>
      <div className="mt-5 mr-4 ml-6 flex items-center gap-6 rounded-full bg-slate-100 dark:bg-slate-800">
        <div className="-m-2">{icon}</div>
        <div className="truncate py-2 pr-4 font-bold">{title}</div>
      </div>
      <div className="pb-6 pl-16 pt-4 pr-6 text-sm text-gray-500 dark:text-slate-400">
        {desc}
      </div>
    </div>
  );
};

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Enji • Designer & Developer</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative z-0 border-b border-b-slate-100 bg-slate-100 pt-28 pb-20 dark:border-slate-800 dark:bg-[#05011E] lg:pt-36 lg:pb-28">
        <div
          className="absolute inset-0 z-[-1] bg-slate-50 bg-grid-slate-200/60 dark:bg-slate-900 dark:bg-grid-slate-50/[0.04] lg:bg-grid-big-slate-200/50 lg:dark:bg-grid-big-slate-50/[.02]"
          style={{
            maskImage:
              'radial-gradient(ellipse at 160% center, black 40%, transparent)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 160% center, black 40%, transparent)',
          }}
        ></div>
        <div className="content-wrapper">
          <div className="relative">
            {/* title */}
            <h1 className="text-gray-600 dark:text-slate-400">
              <span className="mb-3 block animate-fade-left text-5xl font-bold md:mb-4 md:text-7xl">
                hai! saya{' '}
                <strong className="font-extrabold text-gray-900 dark:text-slate-50">
                  énji
                </strong>
                ,
              </span>
              <span className="block animate-fade-left text-xl animation-delay-100 md:text-2xl">
                seorang <strong className="font-bold">designer</strong> dan{' '}
                <strong className="font-bold">developer</strong>.
              </span>
            </h1>
            {/* cta */}
            <div className="mt-8 flex gap-2">
              <Link
                href="/"
                className="button button--solid button--big min-w-[128px] animate-fade-left animation-delay-200"
              >
                Hubungi Saya
              </Link>
              <Link
                href="/"
                className="button button--ghost button--big animate-fade-left px-2 animation-delay-300"
              >
                <DocumentIcon className="h-5 w-5" />
                RESUME
              </Link>
            </div>
            {/* tech stack */}
            <div className="mt-28 lg:mt-48">
              <p className="mb-2.5 animate-fade-left text-sm text-gray-600 animation-delay-400 dark:text-slate-400">
                tech stack/tools favorit saat ini:
              </p>
              <ul className="flex items-center gap-4 text-gray-500 dark:text-slate-500">
                <li>
                  <div className="animate-fade-left transition duration-200 animation-delay-[400ms] hover:text-[#3178C6]">
                    <TypeScriptIcon className="h-6 w-6" />
                  </div>
                </li>
                <li>
                  <div className="animate-fade-left transition duration-200 animation-delay-[430ms] hover:text-[#61DAFB]">
                    <ReactIcon className="h-6 w-6" />
                  </div>
                </li>
                <li>
                  <div className="animate-fade-left transition duration-200 animation-delay-[460ms] hover:text-[#06B6D4]">
                    <TailwindCssIcon className="h-6 w-6" />
                  </div>
                </li>
                <li>
                  <div className="animate-fade-left transition duration-200 animation-delay-[490ms] hover:text-[#000000] dark:hover:text-[#FFFFFF]">
                    <NextJsIcon className="h-6 w-6" />
                  </div>
                </li>
                <li>
                  <div className="h-3 w-[1px] animate-fade-left bg-slate-300 animation-delay-[505ms] dark:bg-slate-700"></div>
                </li>
                <li>
                  <div className="animate-fade-left transition duration-200 animation-delay-[520ms] hover:text-[#007ACC]">
                    <VSCodeIcon className="h-6 w-6" />
                  </div>
                </li>
                <li>
                  <div className="animate-fade-left transition duration-200 animation-delay-[520ms] hover:text-[#F24E1E]">
                    <FigmaIcon className="h-6 w-6" />
                  </div>
                </li>
              </ul>
            </div>
            {/* image */}
            <div className="pointer-events-none absolute -top-36 right-0 hidden lg:flex">
              <div
                className="relative h-[590px] w-[603px]"
                style={{
                  maskImage: `url("data:image/svg+xml,%3Csvg width='603' height='590' fill='none' viewBox='0 0 603 590' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0v393h228v9.5c0 103.55 83.947 187.5 187.5 187.5s187.5-83.947 187.5-187.5v-402.5h-603z' fill='%23000'/%3E%3C/svg%3E%0A")`,
                  WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='603' height='590' fill='none' viewBox='0 0 603 590' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0v393h228v9.5c0 103.55 83.947 187.5 187.5 187.5s187.5-83.947 187.5-187.5v-402.5h-603z' fill='%23000'/%3E%3C/svg%3E%0A")`,
                }}
              >
                <div className="absolute top-0 right-0 h-[590px] w-[375px] rounded-b-full bg-primary-400 dark:bg-primary-700">
                  <div className="absolute right-0 bottom-0">
                    <Image
                      alt="Enji Kusnadi Illustration"
                      src="/me.png"
                      width={457}
                      height={526}
                      className="max-w-none animate-fade-right animation-delay-600"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="content-wrapper">
          <div className="-mt-8 mb-8 flex flex-col gap-4 lg:-mt-16 lg:flex-row lg:gap-8">
            <FeaturedCard
              icon={
                <div className="rounded-full bg-violet-400 p-4 dark:bg-violet-700">
                  <SparklesIcon className="h-5 w-5 text-white" />
                </div>
              }
              title="Clean & Modern Desain"
              desc="Senang membuat design yang modern, clean serta UI yang intuitif."
            />
            <FeaturedCard
              icon={
                <div className="rounded-full bg-red-400 p-4 dark:bg-red-500">
                  <HeartIcon className="h-5 w-5 text-white" />
                </div>
              }
              title="Detail Oriented"
              desc="Tantangan terbesarnya: aksesibilitas, browser kompatibilitas dan desain responsive."
            />
            <FeaturedCard
              icon={
                <div className="rounded-full bg-sky-400 p-4 dark:bg-sky-600">
                  <BoltIcon className="h-5 w-5 text-white" />
                </div>
              }
              title="Fast & Optimized"
              desc="Penulisan code yang terstruktur, optimal serta efisien."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
