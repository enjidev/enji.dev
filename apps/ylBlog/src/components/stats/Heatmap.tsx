// import { cn } from "@/lib/utils";
import clsx from 'clsx';
import { useEffect, useRef } from 'react';

type PostItem = {
  date: string;
  title?: string;
  wordCount: number;
};

function removeTooltip() {
  const tooltip = document.body.querySelector('.heatmap_tooltip');
  if (tooltip) {
    document.body.removeChild(tooltip);
    window.removeEventListener('scroll', removeTooltip);
  }
}

// Move helper functions to the top
function formatDate(date: Date) {
  return date.toISOString().split('T')[0];
}

function createWeek() {
  const week = document.createElement('div');
  week.className = 'heatmap_week';
  return week;
}

function createDay({
  date,
  title,
  count,
  posts,
}: {
  date: string;
  title?: string;
  count: number;
  posts: PostItem[];
}) {
  const day = document.createElement('div');
  day.className = clsx(
    'heatmap_day',
    count === 0 && 'heatmap_day_level_0',
    count > 0 && count < 1000 && 'heatmap_day_level_1',
    count >= 1000 && count < 2000 && 'heatmap_day_level_2',
    count >= 2000 && count < 3000 && 'heatmap_day_level_3',
    count >= 3000 && 'heatmap_day_level_4'
  );

  day.setAttribute('data-date', date);
  if (title) day.setAttribute('data-title', title);
  day.setAttribute('data-count', count.toString());
  day.setAttribute('data-posts', JSON.stringify(posts));

  // Add tooltip
  day.addEventListener('mouseenter', (e) => {
    const tooltip = document.createElement('div');
    tooltip.className = 'heatmap_tooltip';

    // 生成提示内容
    let tooltipContent = '';
    if (posts.length > 0) {
      const contentTop = `
        <div class="heatmap_tooltip_header">
          <span>${date}</span>
          <span>共 ${posts.length} 篇</span>
        </div>
      `;
      let contentButtom = '';
      posts.forEach((post) => {
        contentButtom += `
        <div class="heatmap_tooltip_post_item">
          <span>《${post.title}》</span>
          <span>${post.wordCount} 字</span>
        </div>
        `;
      });

      tooltipContent = contentTop + contentButtom;
    } else {
      tooltipContent += `<span>${date}</span>`;
    }
    tooltip.innerHTML = tooltipContent;

    // 计算提示位置
    const currentTarget = e.currentTarget as HTMLElement;
    const rect = currentTarget.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.top}px`;

    document.body.appendChild(tooltip);

    // 监听滚动事件
    window.addEventListener('scroll', removeTooltip);
  });

  day.addEventListener('mouseleave', removeTooltip);

  return day;
}

interface HeatmapProps {
  data: {
    date: string;
    title?: string;
    wordCount: number;
  }[];
}

function Heatmap({ data }: HeatmapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Get dates for the last year
    const today = new Date();
    const startDate = new Date(today);
    startDate.setFullYear(today.getFullYear() - 1);

    // Adjust to start from Monday
    while (startDate.getDay() !== 1) {
      startDate.setDate(startDate.getDate() + 1);
    }

    const container = containerRef.current;
    container.innerHTML = ''; // Clear existing content

    // Create month labels
    const monthDiv = document.createElement('div');
    monthDiv.className = 'month mb-1 flex justify-around';
    const monthNames = [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ];
    const numMonths = window.innerWidth < 768 ? 6 : 12;
    const startMonthIndex = (startDate.getMonth() - (numMonths - 1) + 12) % 12;

    for (let i = startMonthIndex; i < startMonthIndex + numMonths; i += 1) {
      const monthSpan = document.createElement('span');
      monthSpan.textContent = monthNames[i % 12];
      monthDiv.appendChild(monthSpan);
    }
    container.appendChild(monthDiv);

    // Create heatmap grid
    const heatmapDiv = document.createElement('div');
    heatmapDiv.className = 'h-[96px]';

    const gridDiv = document.createElement('div');
    gridDiv.className = 'flex flex-row';

    const currentDate = new Date(startDate);
    let currentWeek = createWeek();

    while (currentDate <= today) {
      if (currentDate.getDay() === 1 && currentDate > startDate) {
        gridDiv.appendChild(currentWeek);
        currentWeek = createWeek();
      }

      const dateString = formatDate(currentDate);
      const dayData = data.filter((d) => d.date === dateString);

      const day = createDay({
        date: dateString,
        title: dayData[0]?.title,
        count: dayData.reduce((sum, post) => sum + post.wordCount, 0),
        posts: dayData,
      });

      currentWeek.appendChild(day);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    gridDiv.appendChild(currentWeek);
    heatmapDiv.appendChild(gridDiv);
    container.appendChild(heatmapDiv);
  }, [data]);

  return (
    <div className="tailwindcss-heatmap mt-5 flex max-w-fit flex-col items-end text-[10px] leading-[12px] text-neutral-700 dark:text-neutral-400">
      <div className="flex flex-row items-end">
        <div className="mr-1 flex h-[96px] flex-col items-end justify-between text-right">
          <span>周一</span>
          <span>&nbsp;</span>
          <span>周三</span>
          <span>&nbsp;</span>
          <span>周五</span>
          <span>&nbsp;</span>
          <span>周日</span>
        </div>
        <div ref={containerRef} className="heatmap" />
      </div>

      <div className="mt-2 flex items-center">
        按字数：
        <span>少</span>
        <div className="mx-1 flex h-[10px] w-max flex-row items-center gap-[2px]">
          <span className="block h-[10px] w-[10px] rounded-sm bg-[#ebedf0] dark:bg-[#161b22]" />
          <span className="block h-[10px] w-[10px] rounded-sm bg-[#9be9a8] dark:bg-[#0e4429]" />
          <span className="block h-[10px] w-[10px] rounded-sm bg-[#40c463] dark:bg-[#006d32]" />
          <span className="block h-[10px] w-[10px] rounded-sm bg-[#30a14e] dark:bg-[#26a641]" />
          <span className="block h-[10px] w-[10px] rounded-sm bg-[#216e39] dark:bg-[#39d353]" />
        </div>
        <span>多</span>
      </div>
    </div>
  );
}

export default Heatmap;
