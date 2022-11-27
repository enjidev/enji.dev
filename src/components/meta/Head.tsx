import NextHead from 'next/head';

interface HeadProps {
  title: string;
  description: string;
}

const Head = ({ title, description }: HeadProps) => {
  const htmlTitle = `${title} · Enji Kusnadi`;

  return (
    <NextHead>
      <title>{htmlTitle}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
