import Head from 'next/head';

const Error404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found &middot; Enji Kusnadi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="background-grid flex h-full items-center justify-center">
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
