import clsx from 'clsx';

interface PieChartProps {
  data: Array<{ category: string; count: number }>;
}

function PieChart({ data }: PieChartProps) {
  const total = data.reduce((sum, item) => sum + item.count, 0);
  const sortedData = [...data].sort((a, b) => b.count - a.count);

  // 固定的4种颜色
  const colors = ['#e34c26', '#f1e05a', '#2b7489', '#3572A5'];

  return (
    <div className="-mt-5 flex w-full flex-row items-center justify-between gap-4">
      <div
        className={clsx(
          'relative h-[140px] w-[140px] flex-shrink-0',
          'md:h-80 md:w-80'
        )}
      >
        <svg className="h-full w-full" viewBox="0 0 100 100">
          {sortedData.map(({ category, count }, index) => {
            const percentage = (count / total) * 100;
            const offset = sortedData
              .slice(0, index)
              .reduce((sum, item) => sum + (item.count / total) * 100, 0);

            // 计算扇形路径
            const r = 40;
            const cx = 50;
            const cy = 50;
            const startAngle = (offset * 3.6 - 90) * (Math.PI / 180);
            const endAngle =
              ((offset + percentage) * 3.6 - 90) * (Math.PI / 180);

            const x1 = cx + r * Math.cos(startAngle);
            const y1 = cy + r * Math.sin(startAngle);
            const x2 = cx + r * Math.cos(endAngle);
            const y2 = cy + r * Math.sin(endAngle);

            const largeArcFlag = percentage > 50 ? 1 : 0;

            const d = [
              `M ${cx} ${cy}`,
              `L ${x1} ${y1}`,
              `A ${r} ${r} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              'Z',
            ].join(' ');

            return (
              <path
                key={category}
                d={d}
                fill={colors[index % colors.length]}
                className="origin-center transition-transform hover:scale-105"
              />
            );
          })}
        </svg>
      </div>
      <div
        className={clsx(
          'labels min-w-[140px] flex-1 space-y-1.5',
          'md:space-y-2'
        )}
      >
        {sortedData.map(({ category, count }, index) => (
          <div
            key={category}
            className={clsx(
              'flex items-center gap-1.5 text-sm',
              'md:gap-2 md:text-base'
            )}
            style={{ color: colors[index % colors.length] }}
          >
            <span className={clsx('text-base', 'md:text-xl')}>●</span>
            <span className="whitespace-nowrap">
              {category}: {count} 篇 ({((count / total) * 100).toFixed(1)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChart;
