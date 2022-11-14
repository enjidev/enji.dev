import clsx from 'clsx';
import Link from 'next/link';
import LastCommit from '@/components/LastCommit';
import dayjs from '@/utils/dayjs';

const Footer = () => {
  return (
    <footer
      className={clsx(
        'border-t border-divider-light bg-white text-sm text-gray-900',
        'dark:border-divider-dark dark:bg-slate-900 dark:text-slate-200'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <section className={clsx('py-10 font-semibold')}>
          <ul
            className={clsx(
              'flex flex-wrap justify-center gap-x-4 gap-y-1',
              'lg:gap-x-6'
            )}
          >
            <li>
              <Link href="/design">Font & Colors</Link>
            </li>
            <li>
              <a
                href="https://www.figma.com/@enjidev"
                target="_blank"
                rel="noreferrer"
              >
                Design Concept
              </a>
            </li>
            <li>
              <a
                href="https://github.com/enjidev/enji.dev"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
            </li>
          </ul>
        </section>
        <div
          className={clsx(
            'flex justify-between border-t border-divider-light py-6 text-xs',
            'dark:border-divider-dark'
          )}
        >
          <div className={clsx('font-semibold')}>
            &copy; {dayjs().format('YYYY')}, Enji Kusnadi
          </div>
          <div className={clsx('text-gray-500', 'dark:text-slate-400')}>
            <LastCommit />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
