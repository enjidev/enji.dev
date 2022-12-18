import WithTableOfContents from '@/components/layouts/WithTableOfContents';
import Head from '@/components/meta/Head';
import PageHeader from '@/components/shared/Header/PageHeader';
import SkipNavigation from '@/components/shared/Navigation/SkipNavigation';

import { getPageOgImageUrl } from '@/helpers/page';

import type { TPageFrontMatter, TTableOfContents } from '@/types';

interface PageWithMDXProps {
  frontMatter: TPageFrontMatter;
  tableOfContents: TTableOfContents;
  children: React.ReactNode;
}

function PageWithMDX({
  frontMatter: { title, description, caption },
  tableOfContents,
  children,
}: PageWithMDXProps) {
  const image = getPageOgImageUrl({
    caption,
    title,
    description,
  });

  return (
    <>
      <SkipNavigation />
      <Head title={title} description={description} ogImage={image.default} />
      <PageHeader title={title} description={description} caption={caption} />
      <WithTableOfContents tableOfContents={tableOfContents}>
        {children}
      </WithTableOfContents>
    </>
  );
}

export default PageWithMDX;
