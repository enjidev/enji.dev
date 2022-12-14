import clsx from 'clsx';

import Head from '@/components/meta/Head';
import CenteredHeader from '@/components/shared/Header/CenteredHeader';
import { GitHubIcon, NpmIcon } from '@/components/shared/Icons';
import SectionContent from '@/components/shared/SectionContent';
import SectionTitle from '@/components/shared/SectionTitle';
import AppWindow from '@/components/shared/Wireframes/AppWindow';
import GitHubWireframe from '@/components/shared/Wireframes/GitHub';

function Projects() {
  return (
    <>
      <Head title="Projects" description="Projects" />
      <CenteredHeader
        title="My Projects"
        description="All about my Front-End related work"
      />
      <div className={clsx('mt-20')} />
      <SectionTitle
        title="The dynamic accent colors."
        caption="tailwindcss-accent"
        description="With tailwindcss-accent, you can add a dynamic accent color to your Tailwind CSS project."
        button={{
          title: 'See More',
          href: '/projects/tailwindcss-accent',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1', 'lg:flex')} />
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'enjidev/tailwindcss-accent - GitHub',
                      isActive: true,
                    },
                    {
                      icon: <NpmIcon className="h-4 w-4" />,
                      title: 'tailwindcss-accent - npm',
                      isActive: false,
                    },
                  ]}
                >
                  <GitHubWireframe
                    author="enjidev"
                    repository="tailwindcss-accent"
                    description="Add dynamic accent color to your Tailwind CSS project."
                  />
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default Projects;
