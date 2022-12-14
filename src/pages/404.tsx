import clsx from 'clsx';
import Head from 'next/head';

function Error404() {
  return (
    <>
      <Head>
        <title>Page Not Found &middot; Enji Kusnadi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={clsx(
          'background-grid flex h-full items-center justify-center'
        )}
      >
        <div
          className={clsx(
            'content-wrapper text-slate-600',
            'dark:text-slate-400'
          )}
        >
          <div className={clsx('py-24 text-center')}>
            <div
              className={clsx('mb-3 text-6xl font-extrabold', 'md:text-9xl')}
            >
              404
            </div>
            <h1 className={clsx('text-sm', 'md:text-3xl')}>Page Not Found</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error404;
