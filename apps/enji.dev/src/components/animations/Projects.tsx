import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { pathLength: 0.2 },
  show: (i) => {
    const delay = 0.2 + i * 0.1;
    return {
      pathLength: 1,
      transition: {
        pathLength: { delay, duration: 0.8 },
      },
    };
  },
};

function Projects() {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 631 620"
      fill="none"
      initial="hide"
      animate="show"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        'stroke-accent-500 -mt-20 h-full opacity-60',
        'dark:opacity-40'
      )}
    >
      <m.rect
        x="254.558"
        y="1.41421"
        width="122"
        height="358"
        rx="61"
        transform="rotate(45 254.558 1.41421)"
        variants={animation}
        custom={1}
      />
      <m.rect
        x="341.105"
        y="421.087"
        width="122"
        height="358"
        rx="61"
        transform="rotate(135 341.105 421.087)"
        variants={animation}
        custom={2}
      />
      <m.rect
        y="1.41421"
        width="122"
        height="358"
        rx="61"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 374.96 111.414)"
        variants={animation}
        custom={3}
      />
      <m.rect
        x="1.41421"
        y="-1.19209e-07"
        width="122"
        height="358"
        rx="61"
        transform="matrix(0.707107 0.707107 0.707107 -0.707107 288.414 531.087)"
        variants={animation}
        custom={4}
      />
    </m.svg>
  );
}

export default Projects;
