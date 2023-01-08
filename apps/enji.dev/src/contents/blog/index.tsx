import clsx from 'clsx';

import PostPreview from '@/contents/blog/PostPreview';

import type { TPostFrontMatter } from '@/types';

export type BlogContentsProps = {
  posts: Array<{
    slug: string;
    frontMatter: TPostFrontMatter;
  }>;
};

function BlogContents({ posts }: BlogContentsProps) {
  return (
    <div className={clsx('content-wrapper')}>
      <div
        className={clsx(
          'flex flex-col gap-8',
          'md:flex-row md:gap-8 lg:gap-24'
        )}
      >
        <div className={clsx('md:w-64')}>{/* TODO: Filter Posts */}</div>
        <div className={clsx('flex-1')}>
          {posts.map(
            ({
              slug,
              frontMatter: { category, title, description, date, lang, tags },
            }) => (
              <div
                key={slug}
                className={clsx(
                  'mb-8 flex items-start gap-4',
                  'md:mb-4 md:gap-6'
                )}
              >
                <div
                  className={clsx(
                    'border-divider-light mt-14 hidden w-8 -translate-y-1 border-b',
                    'md:mt-16 md:w-20 lg:block',
                    'dark:border-divider-dark'
                  )}
                />
                <div className={clsx('flex-1')}>
                  <PostPreview
                    slug={slug}
                    category={category}
                    title={title}
                    description={description}
                    date={date}
                    lang={lang}
                    tags={tags}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogContents;
