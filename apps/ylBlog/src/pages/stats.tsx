import { GetStaticProps } from 'next';

import { getSortedPosts } from '@/lib/posts';

import StatsContents from '@/contents/stats';
import HeaderImage from '@/contents/stats/HeaderImage';
import Page from '@/contents-layouts/Page';

import type { Stats } from '@/contents/stats';
import type { TPostFrontMatter } from '@/types';

export type BlogProps = TPostFrontMatter & {
  slug: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const sortedPosts = getSortedPosts();
  const posts: Array<BlogProps> = [];

  // 扁平化处理
  sortedPosts.forEach(({ slug, frontMatter }) => {
    const post: BlogProps = {
      slug,
      ...frontMatter,
    };
    posts.push(post);
  });

  // 分类统计
  const postsByCategory = Object.entries(
    posts.reduce(
      (acc, post) => {
        const { category } = post;
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    )
  ).map(([category, count]) => ({ category, count }));

  // 年份统计
  const postsByYear = Object.entries(
    posts.reduce(
      (acc, post) => {
        const year = new Date(post.date).getFullYear().toString();
        acc[year] = (acc[year] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    )
  ).map(([year, count]) => ({ year, count }));

  const stats = {
    // 发文统计，有bug，同一天多篇文章只显示一篇
    posts: posts.map((post) => ({
      date: post.date,
      title: post.title,
      wordCount: post.wordCount,
    })),
    postsByCategory, // 分类统计
    postsByYear, // 年份统计
    tags: posts.flatMap((post) => post.tags), // 标签云

    totalPosts: posts.length,
    totalCategories: new Set(posts.map((post) => post.category)).size,
    totalTags: new Set(posts.flatMap((post) => post.tags)).size,
    totalWordCount: posts.reduce((sum, post) => sum + post.wordCount, 0),
    categories: Array.from(new Set(posts.map((post) => post.category))),
  };

  return {
    props: {
      stats,
    },
  };
};

function StatsPage({ stats }: { stats: Stats }) {
  return (
    <Page
      frontMatter={{
        title: '网站统计数据',
        description: `一些网站文章数据的统计。`,
      }}
      headerImage={<HeaderImage />}
    >
      <StatsContents initialStats={stats} />
    </Page>
  );
}

export default StatsPage;
