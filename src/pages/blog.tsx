import clsx from 'clsx';
import Head from '@/components/meta/Head';
import CenteredHeader from '@/components/shared/Header/CenteredHeader';
import { getSortedPostsData } from '@/lib/posts';

import type { GetStaticProps, NextPage } from 'next';
import type { TPostFrontMatter } from '@/types';
import PostPreview from '@/components/pages/blog/PostPreview';
interface BlogProps {
  posts: Array<TPostFrontMatter>;
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <>
      <Head title="Blog" description="Blog" />
      <CenteredHeader
        title="Personal Blog"
        description="All about the detailed tutorials, stories, and tech-related stuff"
      />
      <div className={clsx('content-wrapper')}>
        <div
          className={clsx(
            'flex flex-col gap-8',
            'md:flex-row md:gap-8 lg:gap-24'
          )}
        >
          <div className={clsx('md:w-64')}>{/* TODO: Filter Posts */}</div>
          <div className={clsx('flex-1')}>
            {posts.map(({ slug, title, date, description }) => (
              <div
                key={slug}
                className={clsx(
                  'mb-8 flex items-start gap-4',
                  'md:mb-4 md:gap-6'
                )}
              >
                <div
                  className={clsx(
                    'mt-14 w-8 -translate-y-1 border-b border-divider-light',
                    'md:mt-16 md:w-20',
                    'dark:border-divider-dark'
                  )}
                />
                <div className={clsx('flex-1')}>
                  <PostPreview
                    title={title}
                    description={description}
                    date={date}
                    slug={slug}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      posts: allPostsData,
    },
  };
};

export default Blog;
