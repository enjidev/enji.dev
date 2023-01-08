import clsx from 'clsx';

import Head from '@/components/meta/Head';
import SkipNavigation from '@/components/navigations/SkipNavigation';
import PageHeader from '@/components/PageHeader';

import { getPageOgImageUrl } from '@/helpers/page';

import type { TPageFrontMatter } from '@/types';

interface PageProps {
  frontMatter: TPageFrontMatter;
  children: React.ReactNode;
  headerImage?: React.ReactNode;
}

function Page({
  frontMatter: { title, description, caption },
  children,
  headerImage = null,
}: PageProps) {
  const image = getPageOgImageUrl({
    caption,
    title,
    description,
  });

  return (
    <>
      <Head title={title} description={description} ogImage={image.default} />
      <SkipNavigation skipTableOfContents={false} />
      <PageHeader
        title={title}
        description={description}
        caption={caption}
        headerImage={headerImage}
      />
      <div className={clsx('scroll-mt-[86px]')} id="main-contents">
        {children}
      </div>
    </>
  );
}

export default Page;
