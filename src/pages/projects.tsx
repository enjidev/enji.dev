import clsx from 'clsx';
import Head from 'next/head';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects &middot; Enji Kusnadi</title>
        <meta name="description" content="Hi!" />
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
              OOPS
            </div>
            <h1 className={clsx('text-sm', 'md:text-3xl')}>
              page is under construction
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
