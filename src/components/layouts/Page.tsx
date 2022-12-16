import clsx from 'clsx';

import Head from '@/components/meta/Head';
import PageHeader from '@/components/shared/Header/PageHeader';
import SkipNavigation from '@/components/shared/Navigation/SkipNavigation';
import TableOfContents from '@/components/shared/TableOfContents';

import { getPageOgImageUrl } from '@/helpers/page';

import type { TTableOfContents } from '@/types';

interface PageProps {
  caption?: string;
  title: string;
  description: string;
  ogImage?: string;
  structuredData?: string;
  tableOfContents?: TTableOfContents;
  children: React.ReactNode;
}

function Page({
  title,
  description,
  caption = undefined,
  ogImage = undefined,
  structuredData = undefined,
  tableOfContents = undefined,
  children,
}: PageProps) {
  const imageLink =
    ogImage ||
    getPageOgImageUrl({
      caption,
      title,
      description,
    });

  return (
    <>
      <Head
        title={title}
        description={description}
        ogImage={imageLink}
        structuredData={structuredData}
      />
      <PageHeader title={title} description={description} caption={caption} />
      <SkipNavigation skipTableOfContents={!!tableOfContents} />
      {tableOfContents ? (
        <div className={clsx('content-wrapper')}>
          <div className={clsx('flex flex-row-reverse gap-8', 'xl:gap-24')}>
            <div className={clsx('-mt-36 hidden', 'lg:block')}>
              <TableOfContents items={tableOfContents} />
            </div>
            <div
              className={clsx('mdx-contents flex-1 scroll-mt-[86px]')}
              id="main-contents"
            >
              {children}
            </div>
            <div
              className={clsx(
                'hidden border-l border-divider-light',
                ' dark:border-divider-dark lg:block'
              )}
            />
          </div>
        </div>
      ) : (
        <div className={clsx('scroll-mt-[86px]')} id="main-contents">
          {children}
        </div>
      )}
    </>
  );
}

export default Page;
