import clsx from 'clsx';

import Head from '@/components/meta/Head';
import PageHeader from '@/components/shared/Header/PageHeader';
import SkipNavigation from '@/components/shared/Navigation/SkipNavigation';
import TableOfContents from '@/components/shared/TableOfContents';

import { getPageOgImageUrl } from '@/helpers/page';

import type { TPageFrontMatter, TTableOfContents } from '@/types';

interface PageWithMDXProps {
  frontMatter: TPageFrontMatter;
  tableOfContents: TTableOfContents;
  children: React.ReactNode;
}

function PageWithMDX({
  frontMatter: { title, description, caption },
  tableOfContents,
  children,
}: PageWithMDXProps) {
  const image = getPageOgImageUrl({
    caption,
    title,
    description,
  });

  return (
    <>
      <SkipNavigation />
      <Head title={title} description={description} ogImage={image.default} />
      <PageHeader title={title} description={description} caption={caption} />
      <div className={clsx('content-wrapper')}>
        <div className={clsx('flex flex-row-reverse gap-8', 'xl:gap-24')}>
          <div className={clsx('-mt-36 hidden', 'lg:block')}>
            <TableOfContents items={tableOfContents} />
          </div>
          <div
            className={clsx('mdx-contents flex-1 scroll-mt-[86px]')}
            id="main-contents"
            data-ss-wrapper
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

export default PageWithMDX;
