import NextHead from 'next/head';

interface HeadProps {
  title: string;
  description: string;
  type?: 'post' | 'page';
  ogImage?: string;
}

function Head({ title, description, ogImage = '', type = 'page' }: HeadProps) {
  const htmlTitle = `${title} · Enji Kusnadi`;

  return (
    <NextHead>
      <title>{htmlTitle}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      {type === 'post' && (
        <>
          <meta property="og:image" content={ogImage} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@enjidev" />
          <meta name="twitter:creator" content="@enjidev" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={ogImage} />
          <meta
            name="twitter:image:alt"
            content={`Image with "${title}" text.`}
          />
        </>
      )}
    </NextHead>
  );
}

export default Head;
