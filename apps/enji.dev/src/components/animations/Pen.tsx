import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { pathLength: 0 },
  show: (i) => {
    const delay = i * 0.1;
    return {
      pathLength: 1,
      transition: {
        pathLength: { delay, duration: 1 },
      },
    };
  },
};

function Pen() {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      initial="hide"
      animate="show"
      strokeWidth={0.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        'stroke-accent-400 h-full -scale-y-100 opacity-20',
        'dark:stroke-accent-500 dark:opacity-5'
      )}
    >
      <m.path d="M12 19l7-7 3 3-7 7-3-3z" variants={animation} custom={1} />
      <m.path
        d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
        variants={animation}
        custom={2}
      />
      <m.path d="M2 2l7.586 7.586" variants={animation} custom={3} />
      <m.circle cx="11" cy="11" r="2" />
    </m.svg>
  );
}

export default Pen;
