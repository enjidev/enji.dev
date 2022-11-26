import Head from 'next/head';
import PageHeader from '@/components/shared/PageHeader';

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog &middot; Enji Kusnadi</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title="Blog" desc="— page is coming very soon!" />
    </>
  );
};

export default Blog;
