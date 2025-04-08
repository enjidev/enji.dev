import frontMatter from 'front-matter';
import fs from 'fs';
import path from 'path';

import type { TPostFrontMatter } from '@/types';

const postsDirectory = path.join(process.cwd(), 'src/pages/blog');

export const getPostSlugs = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ''));
};

export const getPostFrontMatter = (slug: string): TPostFrontMatter => {
  // read markdown file as string
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // use front-matter to parse the post metadata section
  const { attributes } = frontMatter<TPostFrontMatter>(fileContents);

  return attributes;
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
