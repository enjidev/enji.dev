import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Quote from '@/components/Quote';
import FeaturedCard from '@/components/FeaturedCard';
import {
  TypeScriptIcon,
  ReactIcon,
  TailwindCssIcon,
  NextJsIcon,
  FigmaIcon,
  SparklesIcon,
  HeartIcon,
  CodeIcon,
  DocumentIcon,
  VSCodeIcon,
} from '@/components/Icons';

import type { NextPage } from 'next';

interface CtaProps {
  availableForHire?: boolean;
}

const Cta = ({ availableForHire = true }: CtaProps) => {
  return (
    <div className="mt-4 flex gap-2 md:mt-8">
      <div className="relative z-20">
        <Link
          href="/"
          className="button button--solid button--big min-w-[128px] animate-fade-left animation-delay-200"
        >
          Contact Me
        </Link>
      </div>
      {availableForHire ? (
        <div className="relative z-10 animate-fade-left animation-delay-300">
          <div className="button button--ghost button--big pointer-events-none relative animate-fade-out-left text-primary-400 animation-delay-[5000ms] dark:text-primary-300">
            <span className="absolute top-2.5 left-2.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75 dark:bg-primary-200"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-500 dark:bg-primary-200"></span>
            </span>
            AVAILABLE FOR HIRE
          </div>
          <div className="absolute top-0 left-0">
            <Link
              href="/"
              className="button button--ghost button--big animate-fade-left px-2 animation-delay-[5000ms]"
            >
              <DocumentIcon className="h-5 w-5" />
              RESUME
            </Link>
          </div>
        </div>
      ) : (
        <Link
          href="/"
          className="button button--ghost button--big animate-fade-left px-2 animation-delay-300"
        >
          <DocumentIcon className="h-5 w-5" />
          RESUME
        </Link>
      )}
    </div>
  );
};

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Enji Kusnadi &middot; Creative Developer</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative z-0 border-b border-b-slate-100 bg-slate-100 pt-20 pb-20 dark:border-slate-800 dark:bg-[#05011E] lg:pt-36 lg:pb-28">
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
            <div className="relative z-10">
              <div className="flex animate-fade-left items-center gap-2 text-2xl text-slate-500 dark:text-slate-500 md:text-4xl">
                hi!
                <Image
                  className="w-7 md:w-10"
                  alt="Love-you Gesture"
                  src="/assets/emojis/love-you-gesture.png"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <h1 className="text-slate-600 dark:text-slate-400">
                <span className="mb-2 block animate-fade-left text-4xl font-bold animation-delay-[60ms] md:mb-4 md:text-7xl">
                  i&apos;m{' '}
                  <strong className="font-extrabold text-slate-900 dark:text-slate-50">
                    énji
                  </strong>{' '}
                  kusnadi,
                </span>
                <span className="block animate-fade-left text-lg animation-delay-100 md:text-2xl">
                  a <strong className="font-bold">creative developer</strong>.
                </span>
              </h1>
            </div>
            {/* cta */}
            <Cta />
            {/* tech stack */}
            <div className="mt-20 lg:mt-36">
              <p className="mb-2.5 animate-fade-left text-sm text-gray-600 animation-delay-400 dark:text-slate-400">
                current favorite tech stack/tools:
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
            <div className="pointer-events-none absolute -top-36 right-0 z-0 hidden select-none lg:block">
              <div
                className="relative h-[590px] w-[603px]"
                style={{
                  maskImage: `url("data:image/svg+xml,%3Csvg width='603' height='590' fill='none' viewBox='0 0 603 590' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0v393h228v9.5c0 103.55 83.947 187.5 187.5 187.5s187.5-83.947 187.5-187.5v-402.5h-603z' fill='%23000'/%3E%3C/svg%3E%0A")`,
                  WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='603' height='590' fill='none' viewBox='0 0 603 590' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0v393h228v9.5c0 103.55 83.947 187.5 187.5 187.5s187.5-83.947 187.5-187.5v-402.5h-603z' fill='%23000'/%3E%3C/svg%3E%0A")`,
                }}
              >
                <div className="absolute top-0 right-0 h-[590px] w-[375px] rounded-b-full bg-primary-400 dark:bg-primary-700">
                  <div className="absolute right-0 bottom-0 overflow-hidden">
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
