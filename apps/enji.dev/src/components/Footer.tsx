import clsx from 'clsx';
import { m } from 'framer-motion';

import useLastUpdate from '@/hooks/useLastUpdate';

import dayjs from '@/utils/dayjs';

function LastUpdate() {
  const { data, isError } = useLastUpdate();

  return data ? (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {!isError ? (
        <a
          href={data.url}
          target="_blank"
          rel="noreferrer"
          className={clsx('hover:underline')}
        >
          <span className={clsx('hidden', 'sm:inline')}>this site was </span>
          <span>updated {dayjs(data.date).fromNow()}</span>
        </a>
      ) : (
        <a
          href="https://github.com/enjidev/enji.dev"
          target="_blank"
          rel="noreferrer"
          className={clsx('hover:underline')}
        >
          <span>see the recent update on GitHub</span>
        </a>
      )}
    </m.div>
  ) : (
    <span>&nbsp;</span>
  );
}

function Footer() {
  return (
    <footer
      className={clsx(
        'background-grid background-grid--fade-in border-divider-light mt-24 pt-8 text-sm text-slate-900',
        'dark:border-divider-dark dark:text-slate-200'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('py-10 font-semibold')}>
          <ul
            className={clsx(
              'flex flex-wrap justify-center gap-x-2 gap-y-1',
              'lg:gap-x-4'
            )}
          >
            <li>
              <a
                href="https://www.figma.com/community/file/1176392613303840973"
                target="_blank"
                rel="noreferrer"
                className={clsx('block px-2 py-1')}
              >
                Design Concept
              </a>
            </li>
            <li>
              <a
                href="https://github.com/enjidev/enji.dev"
                target="_blank"
                rel="noreferrer"
                className={clsx('block px-2 py-1')}
              >
                Source Code
              </a>
            </li>
          </ul>
        </div>
        <div
          className={clsx(
            'border-divider-light flex justify-between border-t py-6 text-xs',
            'dark:border-divider-dark'
          )}
        >
          <div className={clsx('font-semibold')}>
            &copy; {dayjs().format('YYYY')}, Enji Kusnadi
          </div>
          <div className={clsx('text-slate-500', 'dark:text-slate-400')}>
            <LastUpdate />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
