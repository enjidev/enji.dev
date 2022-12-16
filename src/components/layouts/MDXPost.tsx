import Page from '@/components/layouts/Page';

import { getPostOgImageUrl, getPostStructuredData } from '@/helpers/post';

import type { TPostFrontMatter, TTableOfContents } from '@/types';

interface MDXPostProps {
  frontMatter: TPostFrontMatter;
  tableOfContents: TTableOfContents;
  children: React.ReactNode;
}

function MDXPost({
  frontMatter: { title, date, lang, tags, description, category },
  tableOfContents,
  children,
}: MDXPostProps) {
  const ogImage = getPostOgImageUrl({
    category,
    title,
    date,
    lang,
    tags,
  });

  const structuredData = getPostStructuredData({
    title,
    dateModified: date,
    datePublished: date,
    images: [ogImage['1/1'], ogImage['4/3'], ogImage['16/9']],
  });

  return (
    <Page
      caption={category}
      title={title}
      description={description}
      tableOfContents={tableOfContents}
      ogImage={ogImage.default}
      structuredData={structuredData}
    >
      {children}
    </Page>
  );
}

export default MDXPost;
