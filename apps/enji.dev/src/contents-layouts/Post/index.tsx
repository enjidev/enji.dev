import clsx from 'clsx';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import WithTableOfContents from '@/components/layouts/WithTableOfContents';
import WithTableOfContentsMock from '@/components/layouts/WithTableOfContentsMock';
import Head from '@/components/meta/Head';
import SkipNavigation from '@/components/navigations/SkipNavigation';
import PageHeader from '@/components/PageHeader';
import Reactions from '@/components/Reactions';

import useContentMetaDetail from '@/hooks/useContentMetaDetail';

import { postView } from '@/helpers/api';
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
  // currently is not possible to pass `slug` via property
  const { pathname } = useRouter();
  const slug = pathname.replace('/blog/', '');

  // increase the views count
  postView(slug);

  // get detailed content meta
  const { data } = useContentMetaDetail(slug);

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
      {data ? (
        <div
          className={clsx(
            'pointer-events-none sticky bottom-8 z-[902] mt-16',
            'lg:bottom-8 lg:mt-24'
          )}
        >
          <WithTableOfContentsMock>
            <div
              className={clsx(
                'mx-auto max-w-[360px] px-4',
                'sm:max-w-[420px] sm:px-0'
              )}
            >
              <Reactions
                key={`${data.meta.reactions}-${data.meta.shares}-${data.meta.views}`}
                slug={slug}
                meta={data.meta}
                metaUser={data.metaUser}
                metaSection={data.metaSection}
              />
            </div>
          </WithTableOfContentsMock>
        </div>
      ) : null}
    </>
  );
}

export default Post;
