import Page from '@/components/layouts/Page';

import type { TPageFrontMatter, TTableOfContents } from '@/types';

interface MDXPageProps {
  frontMatter: TPageFrontMatter;
  tableOfContents: TTableOfContents;
  children: React.ReactNode;
}

function MDXPage({
  frontMatter: { title, description, caption = '' },
  tableOfContents,
  children,
}: MDXPageProps) {
  return (
    <Page
      caption={caption}
      title={title}
      description={description}
      tableOfContents={tableOfContents}
    >
      {children}
    </Page>
  );
}

export default MDXPage;
