import type { TApiError, TLastUpdate } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line consistent-return
export default async function lastUpdate(
  req: NextApiRequest,
  res: NextApiResponse<TLastUpdate | TApiError>
) {
  if (req.method === 'GET') {
    const response = await fetch(
      'https://api.github.com/repos/enjidev/enji.dev/commits?per_page=1'
    );

    if (!response.ok) {
      return res.status(200).json({
        error: 'An error occurred while fetching the data.',
      });
    }

    const result = await response.json();
    const { author, commit, html_url: htmlUrl } = result[0];

    return res.status(200).json({
      commiter: author?.login ?? '',
      message: commit?.message ?? '',
      avatar: author?.avatar_url ?? '',
      date: commit?.committer?.date ?? '',
      url: htmlUrl ?? '',
    });
  }
}
