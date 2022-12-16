import clsx from 'clsx';

import Head from '@/components/meta/Head';
import PageHeader from '@/components/shared/Header/PageHeader';
import SkipNavigation from '@/components/shared/Navigation/SkipNavigation';
import TableOfContents from '@/components/shared/TableOfContents';

import { getPageOgImageUrl } from '@/helpers/page';
import { getPostOgImageUrl, getPostStructuredData } from '@/helpers/post';

import type {
  TPageFrontMatter,
  TPostFrontMatter,
  TTableOfContents,
} from '@/types';

interface PageProps {
  type?: 'page' | 'post';
  frontMatter: TPostFrontMatter | TPageFrontMatter;
  tableOfContents?: TTableOfContents;
  children: React.ReactNode;
}

function Page({
  type = 'page',
  frontMatter,
  tableOfContents = undefined,
  children,
}: PageProps) {
  // global front-matter
  const { title, description, caption } = frontMatter;

  let ogImage = '';
  let headerCaption = caption;
  let structuredData = '';

  if (type === 'post') {
    const { category, date, lang, tags } = frontMatter as TPostFrontMatter;

    // get og image urls
    const postOgImages = getPostOgImageUrl({
      category,
      title,
      date,
      lang,
      tags,
    });

    // get structured data
    const postStructuredData = getPostStructuredData({
      title,
      dateModified: date,
      datePublished: date,
      images: [postOgImages['1/1'], postOgImages['4/3'], postOgImages['16/9']],
    });

    ogImage = postOgImages.default;
    headerCaption = category;
    structuredData = postStructuredData;
  }

  if (type === 'page') {
    // get og image urls
    const image = getPageOgImageUrl({
      caption,
      title,
      description,
    });

    ogImage = image.default;
  }

  return (
    <>
      <Head
        title={title}
        description={description}
        ogImage={ogImage}
        structuredData={structuredData}
      />
      <PageHeader
        title={title}
        description={description}
        caption={headerCaption}
      />
      <SkipNavigation skipTableOfContents={!!tableOfContents} />
      {tableOfContents ? (
        <div className={clsx('content-wrapper')}>
          <div className={clsx('flex flex-row-reverse gap-8', 'xl:gap-24')}>
            {tableOfContents.length > 0 && (
              <div className={clsx('-mt-36 hidden', 'lg:block')}>
                <TableOfContents items={tableOfContents} />
              </div>
            )}
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
