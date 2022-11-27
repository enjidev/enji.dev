import clsx from 'clsx';
import Head from '@/components/meta/Head';
import PageHeader from '@/components/shared/PageHeader';
import TableOfContents from '@/components/shared/TableOfContents';
import type { TTableOfContentsItem } from '@/types';

interface PageMeta {
  title: string;
  description: string;
  caption?: string;
  tableOfContents: Array<TTableOfContentsItem>;
}

interface ContentsLayoutProps {
  meta: PageMeta;
  children: React.ReactNode;
}

const ContentsLayout = ({
  meta: { title, description, caption, tableOfContents },
  children,
}: ContentsLayoutProps) => {
  return (
    <>
      <Head title={title} description={description} />
      <div className={clsx('')}>
        <PageHeader title={title} description={description} caption={caption} />
        <div
          className={clsx(
            'pointer-events-none fixed top-0 left-0 right-0 hidden h-24 bg-gradient-to-b from-white opacity-100 transition',
            'lg:block',
            'dark:from-slate-900'
          )}
        />
        <div className={clsx('content-wrapper')}>
          <div className={clsx('flex gap-8', 'xl:gap-24')}>
            <div
              className={clsx('mdx-contents flex-1 pb-24')}
              id="mdx-contents"
            >
              {children}
            </div>
            {tableOfContents.length > 0 && (
              <div className={clsx('-mt-32 hidden', 'lg:block')}>
                <TableOfContents items={tableOfContents} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentsLayout;
