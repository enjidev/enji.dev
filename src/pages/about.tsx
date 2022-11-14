import Head from 'next/head';
import PageHeader from '@/components/PageHeader';

const About = () => {
  return (
    <>
      <Head>
        <title>About Me &middot; Enji Kusnadi</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title="About Me" desc="— page is coming very soon!" />
    </>
  );
};

export default About;
