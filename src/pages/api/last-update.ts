import octokit from '@/utils/octokit';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { TLastUpdate } from '@/types';

export default async function lastUpdate(
  req: NextApiRequest,
  res: NextApiResponse<TLastUpdate>
) {
  if (req.method === 'GET') {
    const response = await octokit.rest.repos.listCommits({
      owner: 'enjidev',
      repo: 'enji.dev',
      per_page: 1,
    });

    if (response.status === 200) {
      const { commit, author, html_url } = response.data[0];

      return res.status(200).json({
        commiter: author?.login ?? '',
        message: commit.message,
        avatar: author?.avatar_url ?? '',
        date: commit.committer?.date ?? '',
        url: html_url,
      });
    }
  }
}
