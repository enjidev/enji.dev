import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { GitHubIcon, NpmIcon, WebIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
import NpmWireframe from '@/components/wireframes/Npm';

type TState = Exclude<
  keyof NonNullable<TProjectsContentsProps>,
  'sectionTitle'
>;

type TProjectsContentsProps = {
  sectionTitle: {
    title: string;
    caption: string;
    description: string;
    button: {
      title: string;
      href: string;
    };
  };
  github?: {
    author: string;
    license: string;
    repository: string;
    description?: string;
  };
  npm?: {
    packageName: string;
    description?: string;
    isWithTypeScript?: boolean;
  };
  web?: {
    image: string;
    alt: string;
    href?: string;
  };
};

function ProjectsContents({
  sectionTitle,
  npm = undefined,
  github = undefined,
  web = undefined,
}: TProjectsContentsProps) {
  const [currentState, setCurrentState] = useState<TState>('github');

  return (
    <>
      <SectionTitle
        title={sectionTitle.title}
        caption={sectionTitle.caption}
        description={sectionTitle.description}
        button={{
          title: sectionTitle.button.title,
          href: sectionTitle.button.href,
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              {github && (
                <SectionButton
                  title="Available on GitHub"
                  icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                  description="Access powerful and flexible package on GitHub with MIT license."
                  active={currentState === 'github'}
                  onClick={() => setCurrentState('github')}
                />
              )}
              {npm && (
                <SectionButton
                  title="npm package"
                  icon={<NpmIcon className={clsx('my-2 h-16 w-16')} />}
                  description="Install and use the package with ease thanks to its typed options."
                  active={currentState === 'npm'}
                  onClick={() => setCurrentState('npm')}
                />
              )}
              {web && (
                <SectionButton
                  title="Website"
                  icon={<WebIcon className={clsx('my-2 h-16 w-16')} />}
                  description="Visit the website to learn more about the package and its features."
                  active={currentState === 'web'}
                  onClick={() => setCurrentState('web')}
                />
              )}
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    github !== undefined && {
                      title: `${github.author}/${github.repository} - GitHub`,
                      icon: <GitHubIcon className="h-4 w-4" />,
                      isActive: currentState === 'github',
                    },
                    npm !== undefined && {
                      title: `${npm.packageName} - npm`,
                      icon: <NpmIcon className="h-4 w-4" />,
                      isActive: currentState === 'npm',
                    },
                    web !== undefined && {
                      title: `${web.href ?? web.alt}`,
                      icon: <WebIcon className="h-4 w-4" />,
                      isActive: currentState === 'web',
                    },
                  ]}
                >
                  {github && currentState === 'github' && (
                    <GitHubWireframe
                      author={github.author}
                      license={github.license}
                      repository={github.repository}
                      description={
                        github.description ?? sectionTitle.description
                      }
                    />
                  )}
                  {npm && currentState === 'npm' && (
                    <NpmWireframe
                      packageName={npm.packageName}
                      description={npm.description ?? sectionTitle.description}
                      isWithTypeScript={npm.isWithTypeScript}
                    />
                  )}
                  {web && currentState === 'web' && (
                    <Image
                      src={web.image}
                      alt={web.alt}
                      width={598}
                      height={318}
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
