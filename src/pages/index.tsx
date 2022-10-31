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
      <main>
        <span>Halo! Nama saya</span>
        <h1>Enji Kusnadi</h1>
        <p>Seorang Designer & Developer.</p>
      </main>
    </>
  );
};

export default Index;
