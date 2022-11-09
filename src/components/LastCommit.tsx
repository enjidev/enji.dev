import useLastCommit from '@/hooks/useLastCommit';
import dayjs from '@/utils/dayjs';

const LastCommit = () => {
  const { commit, isError } = useLastCommit();

  return commit && !isError ? (
    <a
      href={commit.url}
      target="_blank"
      rel="noreferrer"
      className="animate-fade-in hover:underline"
    >
      <span className="hidden sm:inline">this site has been </span>
      <span>updated {dayjs(commit.date).fromNow()}.</span>
    </a>
  ) : (
    <span>&nbsp;</span>
  );
};

export default LastCommit;
