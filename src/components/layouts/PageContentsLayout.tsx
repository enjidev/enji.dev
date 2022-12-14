import clsx from 'clsx';

import Head from '@/components/meta/Head';
import PageHeader from '@/components/shared/Header/PageHeader';
import TableOfContents from '@/components/shared/TableOfContents';

import type { TPageFrontMatter, TTableOfContents } from '@/types';

interface PageContentsLayoutProps {
  frontMatter: TPageFrontMatter;
  tableOfContents: TTableOfContents;
  children: React.ReactNode;
}

function PageContentsLayout({
  frontMatter: { title, description, caption = '' },
  tableOfContents,
  children,
}: PageContentsLayoutProps) {
  return (
    <>
      <Head title={title} description={description} />
      <div className={clsx('')}>
        <PageHeader title={title} description={description} caption={caption} />
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
}

export default PageContentsLayout;
