import Head from 'next/head';

import Error404Contents from '@/contents/404';

function Error404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>
      <Error404Contents />
    </>
  );
}

export default Error404;
