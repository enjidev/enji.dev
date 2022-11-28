import clsx from 'clsx';
import Head from '@/components/meta/Head';
import PageHeader from '@/components/shared/PageHeader';
import TableOfContents from '@/components/shared/TableOfContents';
import type { TTableOfContentsItem } from '@/types';

interface FrontMatter {
  title: string;
  description: string;
  caption?: string;
  pageStatus?: string;
}

interface ContentsLayoutProps {
  frontMatter: FrontMatter;
  tableOfContents: Array<TTableOfContentsItem>;
  children: React.ReactNode;
}

const ContentsLayout = ({
  frontMatter: { title, description, caption = '', pageStatus = '' },
  tableOfContents,
  children,
}: ContentsLayoutProps) => {
  const pageTitle = pageStatus ? `${pageStatus} ${title}` : title;

  return (
    <>
      <Head title={pageTitle} description={description} />
      <div className={clsx('')}>
        <PageHeader
          title={title}
          description={description}
          caption={caption}
          status={pageStatus}
        />
        <div className={clsx('content-wrapper')}>
          <div className={clsx('flex gap-8', 'xl:gap-24')}>
            <div
              className={clsx(
                'hidden border-l border-divider-light',
                ' dark:border-divider-dark lg:block'
              )}
            />
            <div className={clsx('mdx-contents flex-1')} id="mdx-contents">
              {children}
            </div>
            {tableOfContents.length > 0 && (
              <div className={clsx('-mt-36 hidden', 'lg:block')}>
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
