import clsx from 'clsx';

import { TProjectFrontMatter } from '@/types';

interface ProjectFooterProps {
  githubUrl?: TProjectFrontMatter['githubUrl'];
}

function ProjectFooter({ githubUrl = '' }: ProjectFooterProps) {
  if (!githubUrl) return null;

  return (
    <div className={clsx('content-wrapper mt-10')}>
      <div className={clsx('text-sm text-slate-600', 'dark:text-slate-500')}>
        Got any feedback?{' '}
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className={clsx('text-accent-600 font-bold', 'dark:text-accent-500')}
        >
          open an issue / discussion here.
        </a>
      </div>
    </div>
  );
}

export default ProjectFooter;
