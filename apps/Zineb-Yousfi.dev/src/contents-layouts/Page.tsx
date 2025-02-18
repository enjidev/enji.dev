import clsx from 'clsx';

import Head from '@/components/meta/Head';
import SkipNavigation from '@/components/navigations/SkipNavigation';
import PageHeader from '@/components/PageHeader';

import { getPageOgImageUrl } from '@/helpers/page';

import type { TPageFrontMatter } from '@/types';
import type { PropsWithChildren, ReactNode } from 'react';

interface PageProps {
  frontMatter: TPageFrontMatter;
  headerImage?: ReactNode;
}

function Page({
  frontMatter: { title, description, caption },
  children = null,
  headerImage = null,
}: PropsWithChildren<PageProps>) {
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
