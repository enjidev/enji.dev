import clsx from 'clsx';

interface TagCount {
  name: string;
  count: number;
}

function TagCloud({ tags }: { tags: string[] }) {
  const tagCounts = tags.reduce<Record<string, number>>((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  const sortedTags: TagCount[] = Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => {
      if (b.count !== a.count) {
        return b.count - a.count;
      }
      return a.name.localeCompare(b.name);
    });

  const maxCount = Math.max(...sortedTags.map((tag) => tag.count));

  const getTagColor = (count: number): string => {
    const percentage = count / maxCount;
    if (percentage >= 0.8) return 'bg-blue-600 dark:bg-blue-500';
    if (percentage >= 0.6) return 'bg-blue-500 dark:bg-blue-400';
    if (percentage >= 0.4) return 'bg-blue-400 dark:bg-blue-300';
    if (percentage >= 0.2) return 'bg-blue-300 dark:bg-blue-200';
    return 'bg-blue-200 dark:bg-blue-100';
  };

  return (
    <div className="tag-cloud-tags flex flex-wrap gap-2">
      {sortedTags.map(({ name, count }) => (
        <a
          key={name}
          href={`/blog/tag/${encodeURIComponent(name.toLowerCase())}`}
          className="inline-block transition-transform hover:scale-105"
        >
          <div className="tags-shields flex text-sm">
            <div
              className={clsx(
                'tags-shields-before rounded-l-md bg-gray-200 px-2 py-1 text-gray-800',
                'dark:bg-gray-700 dark:text-gray-200'
              )}
            >
              {name}
            </div>
            <div
              className={`tags-shields-after rounded-r-md px-2 py-1 text-white ${getTagColor(count)}`}
            >
              {count}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default TagCloud;
