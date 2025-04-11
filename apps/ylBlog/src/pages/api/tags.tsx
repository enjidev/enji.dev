import { getSortedPosts } from "@/lib/posts";

import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const posts = getSortedPosts();
  const tagCount: Record<string, number> = {};

  posts.forEach((post) => {
    post.frontMatter.tags?.forEach((tag: string) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  res.status(200).json(tagCount);
};

export default handler;
