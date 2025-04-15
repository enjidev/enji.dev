import { useEffect, useRef } from 'react';

interface BarChartProps {
  data: Array<{ year: string; count: number }>;
}

export function BarChart({ data }: BarChartProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft =
        scrollContainerRef.current.scrollWidth;
    }
  }, []);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) =>
    (currentYear - 19 + i).toString()
  );

  const countMap = new Map(data.map((item) => [item.year, item.count]));

  const completeData = years.map((year) => ({
    year,
    count: countMap.get(year) || 0,
  }));

  const maxCount = Math.max(...data.map((item) => item.count));

  const gridValues = Array.from({ length: 3 }, (_, i) =>
    Math.ceil((maxCount / 3) * (i + 1))
  ).reverse();

  const chartHeight = 300;
  const labelPadding = 24;
  const barMaxHeight = chartHeight - 40 - labelPadding;

  return (
    <div className="w-full overflow-x-auto" ref={scrollContainerRef}>
      <div className="relative flex h-[300px] min-w-[800px] items-end justify-between px-2 pt-6">
        <div className="absolute inset-0 -z-10 mt-6 grid grid-rows-3">
          {gridValues.map((value) => (
            <div
              key={`grid-${value}`}
              className="border-t border-gray-100 dark:border-gray-800"
            >
              <span className="absolute -left-6 -top-3 text-xs text-gray-500 dark:text-gray-400">
                {value}
              </span>
            </div>
          ))}
        </div>
        {completeData.map(({ year, count }) => (
          <div key={year} className="group flex w-10 flex-col items-center">
            <div className="relative">
              <div className="absolute bottom-full mb-1 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                {count > 0 ? count : ''}
              </div>
            </div>

            <div
              className="w-6 bg-blue-500 transition-all group-hover:brightness-110"
              style={{
                height: count
                  ? `${(count / maxCount) * barMaxHeight}px`
                  : '2px',
              }}
            />

            <div className="mt-2 origin-left -rotate-45 transform whitespace-nowrap text-sm">
              {year}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
