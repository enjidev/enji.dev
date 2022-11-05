import Head from 'next/head';
import Link from 'next/link';
import {
  TypeScriptIcon,
  ReactIcon,
  TailwindCssIcon,
  NextJsIcon,
  FigmaIcon,
  InkscapeIcon,
} from '@/components/Icons';

import type { NextPage } from 'next';
import Image from 'next/image';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Enji • Designer & Developer</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative py-32 lg:py-48">
        <div
          className="absolute inset-0 z-[-1] bg-slate-100 bg-grid-slate-200 lg:bg-grid-big-slate-200"
          style={{
            maskImage: 'radial-gradient(black, transparent)',
            WebkitMaskImage: 'radial-gradient(black, transparent)',
          }}
        ></div>
        <div className="content-wrapper">
          <div className="relative">
            {/* title */}
            <h1 className="text-gray-600">
              <span className="mb-3 block text-5xl font-bold md:mb-6 md:text-7xl">
                hai! saya{' '}
                <strong className="font-extrabold text-gray-900">énji</strong>,
              </span>
              <span className="block text-xl md:text-2xl">
                seorang <strong>designer</strong> dan <strong>developer</strong>
                .
              </span>
            </h1>
            {/* cta */}
            <div className="mt-8 flex gap-2">
              <Link href="/" className="button min-w-[128px]">
                HIRE ME
              </Link>
              <Link href="/" className="button-outlined">
                RESUME
              </Link>
            </div>
            {/* tech stack */}
            <div className="mt-32">
              <p className="mb-2 text-sm text-gray-400">
                tech stack/tools favorit saya saat ini:
              </p>
              <ul className="flex gap-4 text-gray-400">
                <li>
                  <div className="hover:text-[#3178C6]">
                    <TypeScriptIcon className="h-6 w-6" />
                  </div>
                </li>
                <li>
                  <div className="hover:text-[#61DAFB]">
                    <ReactIcon className="h-6 w-6" />
                  </div>
                </li>
                <li>
                  <div className="hover:text-[#06B6D4]">
                    <TailwindCssIcon className="h-6 w-6" />
                  </div>
                </li>
                <li>
                  <div className="hover:text-[#000000]">
                    <NextJsIcon className="h-6 w-6" />
                  </div>
                </li>
                <li>
                  <div className="hover:text-[#F24E1E]">
                    <FigmaIcon className="h-6 w-6" />
                  </div>
                </li>
                <li>
                  <div className="hover:text-[#000000]">
                    <InkscapeIcon className="h-6 w-6" />
                  </div>
                </li>
              </ul>
            </div>
            {/* image */}
            <div className="absolute right-0 -top-28 hidden lg:block">
              {/* image */}
              <Image
                alt="me"
                src="/me.png"
                height={597}
                width={467}
                className="w-[460px]"
                priority
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Index;
