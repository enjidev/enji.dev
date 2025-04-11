import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Sidebar from '@/components/sidebar/Sidebar';

import useContentMeta from '@/hooks/useContentMeta';

import PostPreview from '@/contents/blog/PostPreview';

import type { TPostFrontMatter } from '@/types';

const PINNED_POST = 'tailwindcss-note';
const POSTS_PER_PAGE = 10;

export type BlogContentsProps = {
  posts: Array<{
    slug: string;
    frontMatter: TPostFrontMatter;
  }>;
};

type TPostPreview = TPostFrontMatter & {
  slug: string;
  shares: number;
  views: number;
};

function BlogContents({ posts }: BlogContentsProps) {
  const { data } = useContentMeta();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  let pinnedPost: TPostPreview;
  const postsPreview: Array<TPostPreview> = [];

  posts.forEach(({ slug, frontMatter }) => {
    const { shares, views } = data[slug]
      ? data[slug].meta
      : { shares: 0, views: 0 };

    const preview: TPostPreview = {
      slug,
      views,
      shares,
      ...frontMatter,
    };

    if (slug === PINNED_POST) {
      pinnedPost = preview;
    } else {
      postsPreview.push(preview);
    }
  });

  const totalPages = Math.ceil(postsPreview.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = postsPreview.slice(startIndex, endIndex);

  useEffect(() => {
    const queryPage = router.query.page;
    if (queryPage) {
      const page = parseInt(queryPage as string, 10);
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      } else {
        setCurrentPage(1);
      }
    } else {
      setCurrentPage(1);
    }
  }, [router.query.page, totalPages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push(`/blog?page=${page}`);
  };

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i += 1) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        buttons.push(
          <button
            type="button"
            key={i}
            style={{
              padding: '0 15px',
              backgroundColor: i === currentPage ? '#3B82F6' : '#E5E7EB',
              color: i === currentPage ? 'white' : 'black',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onClick={() => handlePageChange(i)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#D1D5DB';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                i === currentPage ? '#3B82F6' : '#E5E7EB';
            }}
          >
            {i}
          </button>
        );
      } else if (
        buttons[buttons.length - 1]?.key !== '...' &&
        (i === 2 ||
          i === totalPages - 1 ||
          i === currentPage - 2 ||
          i === currentPage + 2)
      ) {
        buttons.push(<span key="...">...</span>);
      }
    }
    return buttons;
  };

  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex flex-col gap-8', 'md:flex-row')}>
        {/* 侧边栏 */}
        <div className={clsx('md:w-80')}>
          <div className={clsx('sticky top-24', 'space-y-6')}>
            <Sidebar
              show={[
                'tags',
                'categories',
                // 'recentArticles',
                // 'recentComments',
                // 'publicAccount',
              ]}
            />
          </div>
        </div>

        {/* 博客列表 */}
        <div className={clsx('flex-1')}>
          {pinnedPost && (
            <div
              className={clsx(
                'mb-8 flex items-start gap-4',
                'md:mb-12 md:gap-6'
              )}
            >
              <div className={clsx('flex-1')}>
                <PostPreview
                  pinned
                  slug={pinnedPost.slug}
                  category={pinnedPost.category}
                  title={pinnedPost.title}
                  description={pinnedPost.description}
                  date={pinnedPost.date}
                  lang={pinnedPost.lang}
                  tags={pinnedPost.tags}
                  views={pinnedPost.views}
                  shares={pinnedPost.shares}
                />
              </div>
            </div>
          )}

          {currentPosts.map(
            ({
              slug,
              category,
              title,
              description,
              date,
              lang,
              tags,
              views,
              shares,
            }) => (
              <div
                key={slug}
                className={clsx(
                  'mb-8 flex items-start gap-4',
                  'md:mb-4 md:gap-6'
                )}
              >
                <div className={clsx('flex-1')}>
                  <PostPreview
                    slug={slug}
                    category={category}
                    title={title}
                    description={description}
                    date={date}
                    lang={lang}
                    tags={tags}
                    views={views}
                    shares={shares}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* 分页按钮 */}
      <div className="mt-8 flex flex-col items-center">
        <div className="flex justify-center space-x-2">
          <button
            type="button"
            className={clsx('btn rounded-md px-4 py-2', {
              'cursor-not-allowed opacity-50': currentPage === 1,
            })}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            上一页
          </button>

          {renderPageButtons()}

          <button
            type="button"
            className={clsx('btn rounded-md px-4 py-2', {
              'cursor-not-allowed opacity-50': currentPage === totalPages,
            })}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogContents;
