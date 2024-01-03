import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { pathLength: 0.3 },
  show: (i) => {
    const delay = 0.4 + i * 0.1;
    return {
      pathLength: 1.2,
      transition: {
        pathLength: { delay, duration: 0.5 },
      },
    };
  },
};

function Projects() {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      initial="hide"
      animate="show"
      strokeWidth={0.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        'stroke-accent-500 -mt-7 h-full opacity-60',
        'dark:opacity-40'
      )}
    >
      <m.circle
        cx="5"
        cy="6"
        r="2"
        variants={animation}
        custom={1}
        initial={{ pathLength: 1.2 }}
      />
      <m.circle cx="12" cy="6" r="2" variants={animation} custom={2} />
      <m.circle cx="19" cy="6" r="2" variants={animation} custom={3} />
      <m.circle cx="5" cy="18" r="2" variants={animation} custom={4} />
      <m.circle cx="12" cy="18" r="2" variants={animation} custom={5} />
      <m.line x1="5" y1="8" x2="5" y2="16" variants={animation} custom={6} />
      <m.line x1="12" y1="8" x2="12" y2="16" variants={animation} custom={7} />
      <m.path d="M19 8v2a2 2 0 0 1 -2 2h-12" variants={animation} custom={8} />
    </m.svg>
  );
}

export default Projects;
