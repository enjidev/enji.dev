import clsx from 'clsx';

import PostPreview from '@/components/pages/blog/PostPreview';

import type { TPostFrontMatter } from '@/types';

export type BlogContentsProps = {
  posts: Array<TPostFrontMatter & { slug: string }>;
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
            ({ category, title, description, date, lang, slug, tags }) => (
              <div
                key={slug}
                className={clsx(
                  'mb-8 flex items-start gap-4',
                  'md:mb-4 md:gap-6'
                )}
              >
                <div
                  className={clsx(
                    'mt-14 w-8 -translate-y-1 border-b border-divider-light',
                    'md:mt-16 md:w-20',
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
