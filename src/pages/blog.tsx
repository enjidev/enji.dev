import Head from '@/components/meta/Head';
import PageHeader from '@/components/shared/PageHeader';
import { getSortedPostsData } from '@/lib/posts';

import type { GetStaticProps, NextPage } from 'next';
import type { TPostFrontMatter } from '@/types';

interface BlogProps {
  posts: Array<TPostFrontMatter>;
}

const Blog: NextPage<BlogProps> = () => {
  return (
    <>
      <Head title="Blog" description="Blog" />
      <PageHeader
        title="Blog"
        description="— page is coming very soon!"
        caption="Personal"
      />
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
