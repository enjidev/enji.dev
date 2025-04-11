import clsx from 'clsx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

import useContentMeta from '@/hooks/useContentMeta';

import { getPostsByTag, getSortedPosts } from '@/lib/posts';

import PostPreview from '@/contents/blog/PostPreview';
import Page from '@/contents-layouts/Page';

import type { TPostFrontMatter } from '@/types';

const POSTS_PER_PAGE = 3;

type TagPageProps = {
  tag: string;
  posts: Array<{
    slug: string;
    frontMatter: TPostFrontMatter;
  }>;
};

export default function TagPage({ tag, posts }: TagPageProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useContentMeta();
  const router = useRouter();

  const enhancedPosts = useMemo(
    () =>
      posts.map(({ slug, frontMatter }) => {
        const { views = 0, shares = 0 } = data[slug]?.meta || {};
        return { slug, views, shares, frontMatter };
      }),
    [posts, data]
  );

  const totalPages = Math.ceil(enhancedPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = enhancedPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

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
    router.push(`/blog/tag/${tag}?page=${page}`);
  };

  const renderPageButtons = () => {
    const buttons = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= totalPages; i++) {
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
    <Page
      frontMatter={{
        title: `标签：${tag}`,
        description: `所有与 "${tag}" 有关的文章如下`,
        caption: 'Tag',
      }}
    >
      <div className={clsx('content-wrapper')}>
        <div
          className={clsx(
            'flex flex-col gap-8',
            'md:flex-row md:gap-8 lg:gap-24'
          )}
        >
          <div className={clsx('flex-1')}>
            {currentPosts.map(({ slug, frontMatter, views, shares }) => (
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
                    category={frontMatter.category}
                    title={frontMatter.title}
                    description={frontMatter.description}
                    date={frontMatter.date}
                    lang={frontMatter.lang}
                    tags={frontMatter.tags}
                    views={views}
                    shares={shares}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

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
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getSortedPosts();
  const tagsArray = Array.from(
    new Set(posts.flatMap((post) => post.frontMatter.tags))
  );
  const paths = tagsArray.map((tag) => ({ params: { tag } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getPostsByTag(params.tag as string);
  return { props: { tag: params.tag, posts } };
};
