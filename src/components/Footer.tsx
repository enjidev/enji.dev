import { useRouter } from 'next/router';
import Link from 'next/link';
import LastCommit from '@/components/LastCommit';
import dayjs from '@/utils/dayjs';

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white text-sm text-gray-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
      <div className="content-wrapper">
        <section className="py-10 font-semibold">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 lg:gap-x-6">
            <li>
              <Link href="/">Design Concept</Link>
            </li>
            <li>
              <Link href="/">Fonts & Colors</Link>
            </li>
            <li>
              <Link href="/">Source Code</Link>
            </li>
          </ul>
        </section>
        <div className="flex justify-between border-t border-slate-100 py-6 text-xs dark:border-slate-800">
          <div className="font-semibold">
            &copy; {dayjs().format('YYYY')}, Enji Kusnadi
          </div>
          <div className="text-gray-500 dark:text-slate-400">
            <LastCommit />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
