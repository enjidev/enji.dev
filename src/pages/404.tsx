import Head from 'next/head';

const Error404 = () => {
  return (
    <>
      <Head>
        <title>Enji Kusnadi &middot; Creative Developer</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full items-center justify-center">
        <div className="content-wrapper">
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
