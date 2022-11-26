import clsx from 'clsx';
import { motion } from 'framer-motion';
import useLastUpdate from '@/hooks/useLastUpdate';
import dayjs from '@/utils/dayjs';

const LastUpdate = () => {
  const { data, isError } = useLastUpdate();

  return data && !isError ? (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <a
        href={data.url}
        target="_blank"
        rel="noreferrer"
        className={clsx('hover:underline')}
      >
        <span className={clsx('hidden', 'sm:inline')}>this site was </span>
        <span>updated {dayjs(data.date).fromNow()}</span>
      </a>
    </motion.div>
  ) : (
    <span>&nbsp;</span>
  );
};

export default LastUpdate;
