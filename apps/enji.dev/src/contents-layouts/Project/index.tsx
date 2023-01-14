import clsx from 'clsx';
import { useRouter } from 'next/router';

import WithTableOfContents from '@/components/layouts/WithTableOfContents';
import WithTableOfContentsMock from '@/components/layouts/WithTableOfContentsMock';
import Head from '@/components/meta/Head';
import SkipNavigation from '@/components/navigations/SkipNavigation';
import PageHeader from '@/components/PageHeader';
import Reactions from '@/components/Reactions';

import useInsight from '@/hooks/useInsight';

import { getPageOgImageUrl } from '@/helpers/page';

import ProjectFooter from '@/contents-layouts/Project/ProjectFooter';
import ProjectMeta from '@/contents-layouts/Project/ProjectMeta';

import type { TProjectFrontMatter, TTableOfContents } from '@/types';
import type { PropsWithChildren } from 'react';

interface ProjectLayoutProps {
  frontMatter: TProjectFrontMatter;
  tableOfContents: TTableOfContents;
}

function ProjectLayout({
  frontMatter: { title, description, caption, githubUrl, npmUrl },
  tableOfContents,
  children = null,
}: PropsWithChildren<ProjectLayoutProps>) {
  // currently, there is no way to get the 'slug' via a component property.
  const { pathname } = useRouter();
  const slug = pathname.replace('/docs/', '');

  const { data } = useInsight(slug);

  // get og image urls
  const image = getPageOgImageUrl({
    caption,
    title,
    description,
  });

  return (
    <>
      <SkipNavigation />
      <Head title={title} description={description} ogImage={image.default} />
      <PageHeader title={title} description={description} caption={caption} />
      <ProjectMeta githubUrl={githubUrl} npmUrl={npmUrl} />
      <WithTableOfContents tableOfContents={tableOfContents}>
        {children}
        <ProjectFooter githubUrl={githubUrl} />
      </WithTableOfContents>
      {data ? (
        <div
          className={clsx(
            'pointer-events-none sticky bottom-8 z-[902] mt-16',
            'lg:bottom-8 lg:mt-24'
          )}
        >
          <WithTableOfContentsMock>
            <div
              className={clsx(
                'mx-auto max-w-[360px] px-4',
                'sm:max-w-[420px] sm:px-0'
              )}
            >
              <Reactions
                key={`${data.meta.reactions}-${data.meta.shares}-${data.meta.views}`}
                slug={slug}
                meta={data.meta}
                metaUser={data.metaUser}
                metaSection={data.metaSection}
              />
            </div>
          </WithTableOfContentsMock>
        </div>
      ) : null}
    </>
  );
}

export default ProjectLayout;
