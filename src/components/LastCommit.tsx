import useLastCommit from '@/hooks/useLastCommit';
import dayjs from '@/utils/dayjs';

const LastCommit = () => {
  const { commit, isError } = useLastCommit();

  return commit && !isError ? (
    <a href={commit.url} target="_blank" rel="noreferrer">
      this site has been updated {dayjs(commit.date).fromNow()}.
    </a>
  ) : (
    <div>&nbsp;</div>
  );
};

export default LastCommit;
