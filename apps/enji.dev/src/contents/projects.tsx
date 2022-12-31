import clsx from 'clsx';
import { useState } from 'react';

import { GitHubIcon, NpmIcon } from '@/components/shared/Icons';
import { SectionButton } from '@/components/shared/SectionButton';
import SectionContent from '@/components/shared/SectionContent';
import SectionTitle from '@/components/shared/SectionTitle';
import AppWindow from '@/components/shared/Wireframes/AppWindow';
import GitHubWireframe from '@/components/shared/Wireframes/GitHub';
import NpmWireframe from '@/components/shared/Wireframes/Npm';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'npm' | 'github'>('github');

  return (
    <>
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
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Available on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Access powerful and flexible package on GitHub with MIT license."
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />
              <SectionButton
                title="npm package"
                icon={<NpmIcon className={clsx('my-2 h-16 w-16')} />}
                description="Install and use the package with ease thanks to its typed options."
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
              />
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'enjidev/tailwindcss-accent - GitHub',
                      isActive: currentState === 'github',
                    },
                    {
                      icon: <NpmIcon className="h-4 w-4" />,
                      title: 'tailwindcss-accent - npm',
                      isActive: currentState === 'npm',
                    },
                  ]}
                >
                  {currentState === 'github' && (
                    <GitHubWireframe
                      author="enjidev"
                      license="MIT"
                      repository="tailwindcss-accent"
                      description="Add dynamic accent color to your Tailwind CSS project."
                    />
                  )}
                  {currentState === 'npm' && (
                    <NpmWireframe
                      packageName="tailwindcss-accent"
                      description="Add dynamic accent color to your Tailwind CSS project."
                      isWithTypeScript
                    />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
