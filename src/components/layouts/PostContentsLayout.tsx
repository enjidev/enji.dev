import clsx from 'clsx';
import Head from '@/components/meta/Head';
import PageHeader from '@/components/shared/Header/PageHeader';
import TableOfContents from '@/components/shared/TableOfContents';
import type { TTableOfContentsItem } from '@/types';

interface FrontMatter {
  title: string;
  date: string;
  lang: string;
  tags: Array<string>;
  description: string;
  caption?: string;
  type?: 'post' | 'page';
}

interface PostContentsLayoutProps {
  frontMatter: FrontMatter;
  tableOfContents: Array<TTableOfContentsItem>;
  children: React.ReactNode;
}

const PostContentsLayout = ({
  frontMatter: {
    title,
    date,
    lang,
    tags,
    description,
    caption = '',
    type = 'page',
  },
  tableOfContents,
  children,
}: PostContentsLayoutProps) => {
  return (
    <>
      <Head
        title={title}
        description={description}
        type={type}
        ogImage={{ caption, title, date, lang, tags }}
      />
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
};

export default PostContentsLayout;
