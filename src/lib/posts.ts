import fs from 'fs';
import path from 'path';
import frontMatter from 'front-matter';

import type { TPostFrontMatter } from '@/types';

const postsDirectory = path.join(process.cwd(), 'src/pages/blog');

export const getPostData = (fileName: string): TPostFrontMatter => {
  // read markdown file as string
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // use front-matter to parse the post metadata section
  const { attributes } = frontMatter<TPostFrontMatter>(fileContents);

  return attributes;
};

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const data = getPostData(fileName);

    return {
      slug,
      ...data,
    };
  });

  // sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};
