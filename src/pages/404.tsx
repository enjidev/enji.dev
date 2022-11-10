import Head from 'next/head';

const Error404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found &middot; Enji Kusnadi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative z-0 flex h-full items-center justify-center bg-slate-100 dark:bg-[#05011E]">
        <div
          className="absolute inset-0 z-[-1] bg-slate-50 bg-grid-slate-200/60 dark:bg-slate-900 dark:bg-grid-slate-50/[0.04] lg:bg-grid-big-slate-200/50 lg:dark:bg-grid-big-slate-50/[.02]"
          style={{
            maskImage:
              'radial-gradient(ellipse at 160% center, black 40%, transparent)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 160% center, black 40%, transparent)',
          }}
        ></div>
        <div className="content-wrapper text-slate-600 dark:text-slate-400">
          <div className="py-24 text-center">
            <div className="mb-3 text-6xl font-extrabold md:text-9xl">404</div>
            <h1 className="text-sm md:text-3xl">Page Not Found</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
