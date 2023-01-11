import clsx from 'clsx';

import WithTableOfContents from '@/components/layouts/WithTableOfContents';
import WithTableOfContentsMock from '@/components/layouts/WithTableOfContentsMock';
import Head from '@/components/meta/Head';
import SkipNavigation from '@/components/navigations/SkipNavigation';
import PageHeader from '@/components/PageHeader';
import Reactions from '@/components/Reactions';

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

      <div
        className={clsx(
          'sticky bottom-8 z-[902] mt-16',
          'lg:bottom-8 lg:mt-24'
        )}
      >
        <WithTableOfContentsMock>
          <div className={clsx('mx-auto px-4', 'sm:max-w-[600px] lg:px-24')}>
            <Reactions />
          </div>
        </WithTableOfContentsMock>
      </div>
    </>
  );
}

export default ProjectLayout;
