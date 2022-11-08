import useLastCommit from '@/hooks/useLastCommit';
import dayjs from '@/utils/dayjs';

interface LastCommitProps {
  withDot?: boolean;
}

const LastCommit = ({ withDot = false }: LastCommitProps) => {
  const { commit, isError } = useLastCommit();

  return commit && !isError ? (
    <div className="flex gap-2">
      {withDot && <span>&middot;</span>}
      <a
        href={commit.url}
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
      >
        this site has been updated {dayjs(commit.date).fromNow()}.
      </a>
    </div>
  ) : (
    <div>&nbsp;</div>
  );
};

export default LastCommit;
