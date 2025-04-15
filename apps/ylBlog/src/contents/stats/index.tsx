/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import { useMemo } from 'react';

import { BarChart } from '@/components/stats/BarChart';
import Heatmap from '@/components/stats/Heatmap';
import PieChart from '@/components/stats/PieChart';
import TagCloud from '@/components/stats/TagCloud';

export interface Stats {
  totalPosts: number;
  totalCategories: number;
  totalTags: number;
  totalWordCount: number;
  posts: Array<{
    date: string;
    title: string;
    wordCount: number;
  }>;
  categories: string[];
  tags: string[];
  postsByCategory: Array<{ category: string; count: number }>;
  postsByYear: Array<{ year: string; count: number }>;
}

interface StatsContentsProps {
  initialStats: Stats;
}

function StatsContents({ initialStats }: StatsContentsProps) {
  const runningTime = useMemo(() => {
    const startDate = new Date('2025-04-14');
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
      months -= 1;
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months, days };
  }, []);

  return (
    <div className={clsx('content-wrapper mdx-contents')}>
      {/* 发文统计 */}
      <div className="mb-8">
        <h2 className="mb-6 text-2xl font-semibold">发文统计</h2>

        <div
          className={clsx('grid grid-cols-1 gap-6', 'lg:grid-cols-[1fr,auto]')}
        >
          {/* 左侧热力图 */}
          <div
            className={clsx(
              'scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 overflow-x-auto',
              'dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800'
            )}
          >
            <div className="w-fit">
              <Heatmap data={initialStats.posts} />
              {/* <div className="h-80 w-10 -translate-y-80 bg-red-600" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* 状态和分类统计 */}
      <div className={clsx('mb-8 grid grid-cols-1 gap-8', 'lg:grid-cols-2')}>
        {/* 博客状态 */}
        <div>
          <h2 className="mb-6 text-2xl font-semibold">博客状态</h2>
          <div className="blog_status space-y-2">
            <ul>
              <li>
                博客已运行 {runningTime.years > 0 && `${runningTime.years} 年`}{' '}
                {(runningTime.months > 0 || runningTime.years > 0) &&
                  `${runningTime.months} 个月`}{' '}
                {runningTime.days} 天
              </li>
              <li>文章总数：{initialStats.totalPosts} 篇</li>
              <li>分类总数：{initialStats.totalCategories} 个</li>
              <li>标签总数：{initialStats.totalTags} 个</li>
              <li>总字数：{initialStats.totalWordCount} 字</li>
            </ul>

            {/* 状态徽章 */}
            <div className="badge status mt-4 flex flex-wrap gap-2">
              <img
                alt="License"
                src="https://img.shields.io/badge/License-MIT-green"
                className="h-5"
              />
              <img
                alt="WebSite"
                src="https://img.shields.io/website?style=flat-square&url=https%3A%2F%2Fwww.qladgk.com"
                className="h-5"
              />
              <img
                alt="Production"
                src="https://img.shields.io/github/deployments/qlAD/gkBlog/production?label=production&style=flat-square"
                className="h-5"
              />
              <img
                alt="commit"
                src="https://img.shields.io/github/commit-activity/m/qlAD/gkBlog?style=flat-square"
                className="h-5"
              />
              <img
                alt="lase-commit"
                className="h-5"
                src="https://img.shields.io/github/last-commit/qlAD/gkBlog?style=flat-square"
              />

              <img
                alt="tag"
                src="https://img.shields.io/github/v/tag/qlad/gkBlog?style=flat-square"
                className="h-5"
              />
              <img
                alt="repo-size"
                src="https://img.shields.io/github/repo-size/qlad/gkBlog?style=flat-square"
                className="h-5"
              />
            </div>
          </div>
        </div>

        {/* 分类统计 */}
        <div>
          <h2 className="mb-6 text-2xl font-semibold">分类统计</h2>
          <PieChart data={initialStats.postsByCategory} />
        </div>
      </div>

      {/* 年份统计 */}
      <div className="mb-8">
        <h2 className="mb-6 text-2xl font-semibold">年份统计</h2>
        <BarChart data={initialStats.postsByYear} />
      </div>

      {/* 标签云 */}
      <div className="mb-8">
        <h2 className="mb-6 text-2xl font-semibold">标签云</h2>
        <TagCloud tags={initialStats.tags} />
      </div>
    </div>
  );
}

export default StatsContents;
