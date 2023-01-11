import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import WithTableOfContents from '@/components/layouts/WithTableOfContents';
import WithTableOfContentsMock from '@/components/layouts/WithTableOfContentsMock';
import Head from '@/components/meta/Head';
import SkipNavigation from '@/components/navigations/SkipNavigation';
import PageHeader from '@/components/PageHeader';
import Reactions from '@/components/Reactions';

import { getPostOgImageUrl, getPostStructuredData } from '@/helpers/post';

import PostFooter from '@/contents-layouts/Post/PostFooter';
import PostMeta from '@/contents-layouts/Post/PostMeta';

import type { TPostFrontMatter, TTableOfContents } from '@/types';

interface PostProps {
  frontMatter: TPostFrontMatter;
  tableOfContents: TTableOfContents;
}

function Post({
  frontMatter: { title, description, caption, category, date, lang, tags },
  tableOfContents,
  children = null,
}: PropsWithChildren<PostProps>) {
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
      <PostMeta date={date} lang={lang} />
      <WithTableOfContents tableOfContents={tableOfContents}>
        {children}
        <PostFooter tags={tags} category={category} />
      </WithTableOfContents>
      <div
        className={clsx(
          'pointer-events-none sticky bottom-8 z-[902] mt-16',
          'lg:bottom-8 lg:mt-24'
        )}
      >
        <WithTableOfContentsMock>
          <div className={clsx('mx-auto px-4', 'sm:max-w-[600px] lg:px-24')}>
            <Reactions />
          </div>
        </WithTableOfContentsMock>
      </div>
    </>
  );
}

export default Post;
