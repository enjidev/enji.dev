import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import ApplyFormat from './ApplyFormat';
// import TwikooComments from "@/components/TwikooComments";
import AvatarCircles from './AvatarCircles';
import Disclaimer from './Disclaimer';

type WebsiteItem = {
  name: string;
  url: string;
  preview: string;
  avatar: string;
  description: string;
  category: string;
};
type AllWebsites = {
  category: string;
  items: WebsiteItem[];
};

function GridList({
  category,
  items,
}: {
  category: string;
  items: WebsiteItem[];
}) {
  return (
    <div className="mt-8">
      <h2 className="mb-4 text-xl font-bold">{`${category} (${items.length})`}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((site) => (
          <div key={site.name} className="group">
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'relative flex flex-col rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800',
                category === '推荐' && 'overflow-hidden'
              )}
            >
              {/* 网站截图 */}
              <div
                className={clsx(
                  'pointer-events-none',
                  category !== '推荐' &&
                    'absolute left-0 top-full z-10 w-full scale-75 opacity-0 transition-transform group-hover:scale-100 group-hover:opacity-100'
                )}
              >
                <Image
                  src={site.preview}
                  alt={`${site.name} preview`}
                  width={300}
                  height={150}
                  className={clsx(
                    'h-32 w-full object-cover',
                    category !== '推荐' && 'rounded-lg border shadow-md'
                  )}
                />
              </div>

              {/* 网站信息 */}
              <div
                className={clsx(
                  'flex items-center space-x-4 p-4',
                  category === '推荐' &&
                    'absolute left-0 top-0 h-full w-full bg-white/70 duration-500 group-hover:-translate-y-full dark:bg-black/70'
                )}
              >
                <Image
                  src={site.avatar}
                  alt={`${site.name} avatar`}
                  width={300}
                  height={150}
                  className="h-12 w-12 rounded-full border-2 border-white dark:border-gray-800"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {site.name}
                  </h3>
                  <p className="line-clamp-1 overflow-hidden text-sm text-gray-600 dark:text-gray-400">
                    {site.description}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function LinksContents() {
  const categories = ['推荐', '技术', '生活'];

  const [Websites, setWebsites] = useState<WebsiteItem[]>([]);
  const [groupedWebsites, setGroupedWebsites] = useState<AllWebsites[]>([]);

  const fetchLinks = async () => {
    try {
      const response = await fetch('/api/links');
      const data = await response.json();

      setWebsites(data);
      const res = categories.map((category) => ({
        category,
        items: data.filter((site) => site.category === category),
      }));
      setGroupedWebsites(res);
    } catch (error) {
      // console.warn('Error fetching links:', error);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div className={clsx('content-wrapper')}>
      <AvatarCircles
        numPeople={99}
        avatarUrls={Websites.slice(0, 10).map((site) => site.avatar)}
      />

      {groupedWebsites.map((group) => (
        <GridList
          key={group.category}
          category={group.category}
          items={group.items}
        />
      ))}

      <ApplyFormat />

      <div className="mdx-contents">
        <Disclaimer />
      </div>

      {/* <TwikooComments /> */}
    </div>
  );
}

export default LinksContents;
