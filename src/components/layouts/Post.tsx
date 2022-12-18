import clsx from 'clsx';

import Head from '@/components/meta/Head';
import PageHeader from '@/components/shared/Header/PageHeader';
import SkipNavigation from '@/components/shared/Navigation/SkipNavigation';
import TableOfContents from '@/components/shared/TableOfContents';

import { getPostOgImageUrl, getPostStructuredData } from '@/helpers/post';

import type { TPostFrontMatter, TTableOfContents } from '@/types';

interface PostProps {
  frontMatter: TPostFrontMatter;
  tableOfContents: TTableOfContents;
  children: React.ReactNode;
}

function Post({
  frontMatter: { title, description, caption, category, date, lang, tags },
  tableOfContents,
  children,
}: PostProps) {
  // get og image urls
  const postOgImages = getPostOgImageUrl({
    category,
    title,
    date,
    lang,
    tags,
  });

  // get structured data
  const structuredData = getPostStructuredData({
    title,
    dateModified: date,
    datePublished: date,
    images: [postOgImages['1/1'], postOgImages['4/3'], postOgImages['16/9']],
  });

  return (
    <>
      <Head
        title={title}
        description={description}
        ogImage={postOgImages.default}
        structuredData={structuredData}
      />
      <SkipNavigation />
      <PageHeader title={title} description={description} caption={caption} />
      <div className={clsx('content-wrapper')}>
        <div className={clsx('flex flex-row-reverse gap-8', 'xl:gap-24')}>
          <div className={clsx('-mt-36 hidden', 'lg:block')}>
            <TableOfContents items={tableOfContents} />
          </div>
          <div
            className={clsx('mdx-contents flex-1 scroll-mt-[86px]')}
            id="main-contents"
            data-ss-wrapper
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
    </>
  );
}

export default Post;
