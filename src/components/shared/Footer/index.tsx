import clsx from 'clsx';
import Link from 'next/link';
import LastUpdate from '@/components/shared/Footer/LastUpdate';
import dayjs from '@/utils/dayjs';

const Footer = () => {
  return (
    <footer
      className={clsx(
        'background-grid background-grid--fade-in mt-24 border-divider-light pt-8 text-sm text-slate-900',
        'dark:border-divider-dark dark:text-slate-200'
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
              <Link href="/design" className={clsx('px-2 py-1')}>
                Font & Colors
              </Link>
            </li>
            <li>
              <a
                href="https://www.figma.com/community/file/1176392613303840973"
                target="_blank"
                rel="noreferrer"
                className={clsx('px-2 py-1')}
              >
                Design Concept
              </a>
            </li>
            <li>
              <a
                href="https://github.com/enjidev/enji.dev"
                target="_blank"
                rel="noreferrer"
                className={clsx('px-2 py-1')}
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
          <div className={clsx('text-slate-500', 'dark:text-slate-400')}>
            <LastUpdate />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
