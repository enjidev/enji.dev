import type { NextPage } from 'next';
import Head from 'next/head';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Enji • Designer & Developer</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="content-wrapper">
        <p>Halo! Saya</p>
        <h1 className="text-4xl font-extrabold">
          Enji Kusnadi, Seorang Designer & Developer.
        </h1>
      </div>
    </>
  );
};

export default Index;
