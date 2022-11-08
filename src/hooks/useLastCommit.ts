import { useEffect, useState } from 'react';
import octokit from '@/utils/octokit';

type LastCommit = {
  commiter: string;
  message: string;
  avatar: string;
  date: string;
  url: string;
};

export default function useLastCommit() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [commit, setCommit] = useState<LastCommit>();

  useEffect(() => {
    octokit.rest.repos
      .listCommits({
        owner: 'enjidev',
        repo: 'enji.dev',
        per_page: 1,
      })
      .then(
        (res) => {
          const { commit, author, html_url } = res.data[0];

          setIsLoading(false);
          setCommit({
            commiter: author?.login ?? '',
            message: commit.message,
            avatar: author?.avatar_url ?? '',
            date: commit.committer?.date ?? '',
            url: html_url,
          });
        },
        (err) => {
          setIsLoading(false);
          setIsError(err);
        }
      );
  }, []);

  return {
    isLoading,
    isError,
    commit,
  };
}
