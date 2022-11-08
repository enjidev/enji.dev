import { useRouter } from 'next/router';
import Link from 'next/link';
import LastCommit from '@/components/LastCommit';
import dayjs from '@/utils/dayjs';

type LocaleLinkProps = {
  id: string;
  title: string;
  shortTitle: string;
};

const LocaleLink = ({ id, title, shortTitle }: LocaleLinkProps) => {
  const { locale } = useRouter();
  const isActive = locale === id;

  return !isActive ? (
    <Link href="/" locale={id} className="group">
      <span className="group-hover:underline md:hidden">{shortTitle}</span>
      <span className="hidden group-hover:underline md:inline-block">
        {title}
      </span>
    </Link>
  ) : (
    <span className="font-semibold text-gray-800 dark:text-slate-200">
      <span className="md:hidden">{shortTitle}</span>
      <span className="hidden md:inline-block">{title}</span>
    </span>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 text-sm text-gray-900 dark:border-slate-800 dark:text-slate-200">
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
        <div className="flex justify-between border-t border-slate-100 py-6 text-sm dark:border-slate-800">
          <section className="flex flex-row items-baseline gap-2">
            <div className="font-semibold">
              &copy; {dayjs().format('YYYY')}, Enji Kusnadi
            </div>
            <section className="hidden text-gray-500 dark:text-slate-400 md:block">
              <LastCommit withDot={true} />
            </section>
          </section>
          <section className="flex flex-row items-baseline gap-2">
            <div className="flex gap-2 text-gray-500 dark:text-slate-400">
              <LocaleLink id="id" shortTitle="ID" title="Bahasa Indonesia" />
              <div>&middot;</div>
              <LocaleLink id="en" shortTitle="EN" title="English" />
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
