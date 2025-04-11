import { getSortedPosts } from '@/lib/posts';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = getSortedPosts();
  const categoryCount: Record<string, number> = {};

  posts.forEach((post) => {
    const { category } = post.frontMatter;
    if (category) {
      categoryCount[category] = (categoryCount[category] || 0) + 1;
    }
  });

  res.status(200).json(categoryCount);
};

export default handler;
