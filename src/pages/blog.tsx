import Page from '@/components/layouts/Page';

import { getSortedPostsData } from '@/lib/posts';

import BlogContents from '@/contents/blog';

import type { BlogContentsProps } from '@/contents/blog';
import type { GetStaticProps } from 'next';

type BlogProps = BlogContentsProps;

function Blog({ posts }: BlogProps) {
  return (
    <Page
      frontMatter={{
        title: 'Personal Blog',
        description: 'Web development thoughts and stories.',
      }}
    >
      <BlogContents posts={posts} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      posts: allPostsData,
    },
  };
};

export default Blog;
