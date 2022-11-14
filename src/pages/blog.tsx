import Head from 'next/head';
import PageHeader from '@/components/PageHeader';

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog &middot; Enji Kusnadi</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title="Blog" desc="coming very soon!" />
    </>
  );
};

export default Blog;
