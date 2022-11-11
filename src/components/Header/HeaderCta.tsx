import { motion } from 'framer-motion';
import Link from 'next/link';
import { DocumentIcon } from '@/components/Icons';

const animation = {
  hide: {
    x: -16,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

const HeaderCta = () => {
  return (
    <motion.div className="flex gap-2" initial="hide" animate="show">
      <motion.div variants={animation} transition={{ delay: 0.4 }}>
        <Link
          href="/"
          className="button button--solid button--big min-w-[128px]"
        >
          Contact Me
        </Link>
      </motion.div>
      <motion.div variants={animation} transition={{ delay: 0.5 }}>
        <Link href="/" className="button button--ghost button--big px-2">
          <DocumentIcon className="h-5 w-5" />
          RESUME
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeaderCta;
