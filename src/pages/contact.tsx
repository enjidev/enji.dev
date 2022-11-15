import Head from 'next/head';
import PageHeader from '@/components/PageHeader';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact &middot; Enji Kusnadi</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title="Contact" desc="— page is coming very soon!" />
    </>
  );
};

export default Contact;
