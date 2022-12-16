import clsx from 'clsx';

import Head from '@/components/meta/Head';
import PageHeader from '@/components/shared/Header/PageHeader';
import SkipNavigation from '@/components/shared/Navigation/SkipNavigation';
import TableOfContents from '@/components/shared/TableOfContents';

import { getPageOgImageUrl } from '@/helpers/page';

import type { TPageFrontMatter, TTableOfContents } from '@/types';

interface MDXPageProps {
  frontMatter: TPageFrontMatter;
  tableOfContents: TTableOfContents;
  children: React.ReactNode;
}

function MDXPage({
  frontMatter: { title, description, caption = '' },
  tableOfContents,
  children,
}: MDXPageProps) {
  const ogImage = getPageOgImageUrl({
    caption,
    title,
    description,
  });

  return (
    <>
      <Head title={title} description={description} ogImage={ogImage} />
      <SkipNavigation />
      <PageHeader title={title} description={description} caption={caption} />
      <div className={clsx('content-wrapper')}>
        <div className={clsx('flex flex-row-reverse gap-8', 'xl:gap-24')}>
          {tableOfContents.length > 0 && (
            <div className={clsx('-mt-36 hidden', 'lg:block')}>
              <TableOfContents items={tableOfContents} />
            </div>
          )}
          <div
            className={clsx('mdx-contents flex-1 scroll-mt-[86px]')}
            id="main-contents"
          >
            {children}
          </div>
          <div
            className={clsx(
              'hidden border-l border-divider-light',
              ' dark:border-divider-dark lg:block'
            )}
          />
        </div>
      </div>
    </>
  );
}

export default MDXPage;
