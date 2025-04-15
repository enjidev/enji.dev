import frontMatter from 'front-matter';
import fs from 'fs';
import path from 'path';

import type { TPostFrontMatter } from '@/types';

const postsDirectory = path.join(process.cwd(), 'src/pages/blog');

export const getPostSlugs = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName) => {
      const dirPath = path.join(postsDirectory, fileName);

      return fs.statSync(dirPath).isFile();
    })
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
};

export const getPostFrontMatter = (slug: string): TPostFrontMatter => {
  // 读取markdown文件
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // 使用 front-matter 解析文件头部的元数据
  const { attributes, body } = frontMatter<TPostFrontMatter>(fileContents);

  const wordCount = body.replace(/\s+/g, '').length;

  return { ...attributes, wordCount };
};

export const getSortedPosts = () => {
  const slugs = getPostSlugs();

  const allPostsData = slugs.map((slug) => {
    const data = getPostFrontMatter(slug);

    return {
      slug,
      frontMatter: data,
    };
  });

  // sort posts by date
  return allPostsData.sort(
    ({ frontMatter: { date: a } }, { frontMatter: { date: b } }) => {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    }
  );
};

// 根据分类获取文章
export const getPostsByCategory = (category: string) => {
  const posts = getSortedPosts();
  return posts.filter((post) => post.frontMatter.category === category);
};

// 根据标签获取文章
export const getPostsByTag = (tag: string) => {
  const posts = getSortedPosts();
  return posts.filter((post) => post.frontMatter.tags?.includes(tag));
};
