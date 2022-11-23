import Head from 'next/head';
import PageHeader from '@/components/shared/PageHeader';

const Studio = () => {
  return (
    <>
      <Head>
        <title>Studio &middot; Enji Kusnadi</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title="Studio" desc="— page is coming very soon!" />
    </>
  );
};

export default Studio;
