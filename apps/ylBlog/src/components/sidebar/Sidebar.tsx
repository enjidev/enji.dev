import clsx from 'clsx';
import { m } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Card from './Card';

interface RecentArticle {
  title: string;
  url: string;
}

interface Comment {
  id: string;
  url: string;
  nick: string;
  mailMd5: string;
  link: string;
  comment: string;
  commentText: string;
  created: number;
  avatar: string;
  relativeTime: string;
}

interface IArticle {
  title: string;
  slug: string;
}

interface SidebarProps {
  show: string[];
}

interface TwikooConfig {
  envId: string;
  el: string;
  pageSize?: number;
  includeReply?: boolean;
}

declare global {
  interface Window {
    twikoo: {
      init: (config: TwikooConfig) => void;
      getRecentComments: (config: TwikooConfig) => Promise<Comment[]>;
    };
  }
}

function Sidebar({ show }: SidebarProps) {
  const imageUrl = 'https://cdn.qladgk.com/images/gongzhonghao.png';
  const [recentArticles, setRecentArticles] = useState<RecentArticle[]>([]);
  const [tagsWithCount, setTagsWithCount] = useState<Record<string, number>>(
    {}
  );
  const [visibleTags, setVisibleTags] = useState<string[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState<string[]>([]);
  const [recentCommentsState, setRecentCommentsState] = useState<Comment[]>([]);

  const fetchRecentComments = async () => {
    try {
      const fetchedComments = await window.twikoo.getRecentComments({
        envId: 'https://twikoo.qladgk.com/',
        pageSize: 3,
        includeReply: false,
        el: '',
      });
      setRecentCommentsState(fetchedComments);
    } catch (error) {
      // console.warn('Error fetching recent comments:', error);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/npm/twikoo@1.6.39/dist/twikoo.min.js';
    script.async = true;

    script.onload = () => {
      window.twikoo.init({
        envId: 'https://twikoo.qladgk.com/',
        el: '#tcomment',
      });

      fetchRecentComments();
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/content/latest'); // API 路径
      const data = await response.json();
      const articles = data.map((article: IArticle) => ({
        title: article.title,
        url: `/blog/${article.slug}`,
      }));
      setRecentArticles(articles);
    } catch (error) {
      // console.warn('Error fetching recent articles:', error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchTags = async () => {
    const response = await fetch('/api/tags');
    const data = await response.json();

    // 对 tags 按数量排序
    const sortedTags = Object.entries(data).sort(
      ([, countA], [, countB]) => Number(countB) - Number(countA)
    );

    setTagsWithCount(data); // 保存完整标签数据
    setVisibleTags(sortedTags.slice(0, 15).map(([tag]) => tag)); // 初始化只显示前 15 个
  };

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchCategories = async () => {
    const response = await fetch('/api/categories');
    const data = await response.json();
    setVisibleCategories(Object.keys(data));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
    const sortedTags = Object.entries(tagsWithCount).sort(
      ([, countA], [, countB]) => countB - countA
    );
    setVisibleTags(sortedTags.map(([tag]) => tag));
  };

  return (
    <aside
      aria-label="Sidebar with multiple sections"
      className={clsx('space-y-6')}
    >
      {/* Render sections conditionally based on `show` prop */}
      {show.includes('categories') && (
        <Card title="文章分类">
          <div className="flex flex-wrap gap-4">
            {visibleCategories.map((category) => (
              <a
                key={category}
                href={`/blog/category/${category}`}
                className={clsx(
                  'rounded-full px-3 py-1',
                  'bg-blue-500 bg-opacity-80 text-white', // 使背景颜色更透明
                  'transform transition-transform hover:scale-105',
                  'hover:bg-blue-600 hover:bg-opacity-90', // 悬停时背景更加不透明
                  'dark:bg-blue-700 dark:bg-opacity-80 dark:hover:bg-blue-800 dark:hover:bg-opacity-90', // 暗黑模式下透明度
                  'duration-300'
                )}
              >
                {category}
              </a>
            ))}
          </div>
        </Card>
      )}

      {show.includes('tags') && (
        <Card title="文章标签" className="hidden md:block">
          <div className="relative overflow-hidden">
            <div className="flex flex-wrap space-x-4">
              {visibleTags.map((tag) => (
                <span
                  key={tag}
                  className="relative rounded-md px-2 py-1 text-blue-500 hover:bg-slate-300/50 dark:hover:bg-slate-600/50"
                >
                  <a href={`/blog/tag/${tag}`}>{tag}</a>
                  <sup className="absolute -right-2 -top-0 text-xs text-gray-400">
                    {tagsWithCount[tag]}
                  </sup>
                </span>
              ))}
            </div>

            {!showMore &&
              visibleTags.length < Object.keys(tagsWithCount).length && (
                <div className="relative -mt-8 flex justify-center">
                  <div className="pointer-events-none absolute bottom-5 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white dark:to-[#161e31]" />
                  <button
                    type="button"
                    onClick={handleShowMore}
                    className={clsx(
                      'z-10 w-full max-w-[90%] rounded-lg bg-slate-200 p-1.5 text-slate-800',
                      'hover:bg-slate-300 sm:ml-0',
                      'dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700'
                    )}
                  >
                    查看全部
                  </button>
                </div>
              )}
          </div>
        </Card>
      )}

      {show.includes('recentArticles') && (
        <Card title="推荐文章" className="hidden md:block">
          <ul className="space-y-2">
            {recentArticles.map((article) => (
              <li key={article.url}>
                <a
                  href={article.url}
                  className="group flex items-center"
                  title={article.title}
                >
                  <span className="bg-accent-100 text-accent-900 group-hover:bg-accent-900 group-hover:text-accent-100 dark:bg-accent-800 dark:text-accent-100 dark:group-hover:bg-accent-100 dark:group-hover:text-accent-800 flex h-10 flex-shrink-0 items-center rounded-md px-1.5 text-sm font-black leading-none">
                    新🔥
                  </span>
                  <span
                    className={clsx(
                      'ml-2 min-w-0 flex-grow overflow-hidden text-ellipsis',
                      'hover:underline',
                      'whitespace-normal', // 允许换行
                      'line-clamp-2', // 限制最多显示两行
                      'text-sm' // 调整字体大小
                    )}
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                    }} // 为 line-clamp 提供支持
                  >
                    {article.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {show.includes('recentComments') && (
        <Card title="最近评论" className="hidden md:block">
          <ul className="space-y-2">
            {recentCommentsState.map((comment, index) => (
              <li key={comment.id}>
                <a href={comment.url} className="group flex items-center">
                  <Image
                    src={comment.avatar || '/default-avatar.png'}
                    alt={comment.nick}
                    width={32}
                    height={32}
                    className="mr-3 h-8 w-8 rounded-full"
                  />
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">
                        {comment.nick}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {comment.commentText.length > 50
                          ? `${comment.commentText.slice(0, 50)}...`
                          : comment.commentText}
                      </p>
                    </div>
                    {/* 显示评论时间，格式为 MM-DD */}
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(comment.created).toLocaleDateString('zh-CN', {
                        month: '2-digit',
                        day: '2-digit',
                      })}
                    </p>
                  </div>
                </a>

                {/* 仅在不是最后一条评论时显示分隔线 */}
                {index !== recentCommentsState.length - 1 && (
                  <hr className="my-2 border-t border-dashed border-gray-200 dark:border-gray-600" />
                )}
              </li>
            ))}
          </ul>
        </Card>
      )}

      {show.includes('publicAccount') && (
        <Card title="订阅更新" className="hidden md:block">
          <div className="flex items-center justify-center">
            <m.img
              src={imageUrl}
              alt="Sidebar Image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg"
            />
          </div>
        </Card>
      )}
    </aside>
  );
}

export default Sidebar;
