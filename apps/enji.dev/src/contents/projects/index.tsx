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

type TState = 'npm' | 'github' | 'web';

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
  availableStates: TState[];
  appWindows: {
    [key in TState]?: {
      [dynamicKey: string]: string;
    };
  }
};

function ProjectsContents({ sectionTitle, availableStates, appWindows }: TProjectsContentsProps) {
  const [currentState, setCurrentState] = useState<TState>('github');
  
  const isAvailable = (state: TState) => availableStates.includes(state);

  const getBrowserTabs = () => {
    const tabs = [];
  
    const addTab = (service, icon, title, isActive) => {
      if (isAvailable(service)) {
        tabs.push({ icon, title, isActive});
      }
    };
  
    addTab('github', <GitHubIcon className="h-4 w-4" />, `enjidev/${appWindows.github.repository} - GitHub`, true);
    addTab('npm', <NpmIcon className="h-4 w-4" />, `${appWindows.npm.packageName} - npm `, false);
    addTab('web', <WebIcon className="h-4 w-4" />, `${appWindows.web.alt}`, false);
  
    return tabs;
  }
  
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
              {isAvailable("github") && <SectionButton
                title="Available on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Access powerful and flexible package on GitHub with MIT license."
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />}
              {isAvailable("npm") && <SectionButton
                title="npm package"
                icon={<NpmIcon className={clsx('my-2 h-16 w-16')} />}
                description="Install and use the package with ease thanks to its typed options."
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
              />}
              {isAvailable("web") && <SectionButton
                title="Website"
                icon={<WebIcon className={clsx('my-2 h-16 w-16')} />}
                description="Visit the website to learn more about the package and its features."
                active={currentState === 'web'}
                onClick={() => setCurrentState('web')}
              />}
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[...getBrowserTabs()]}
                >
                  {appWindows.github && currentState === 'github' && (
                    <GitHubWireframe
                      author={appWindows.github.author}
                      license={appWindows.github.license}
                      repository={appWindows.github.repository}
                      description={appWindows.github.description}
                    />
                  )}
                  {appWindows.npm && currentState === 'npm' && (
                    <NpmWireframe
                      packageName={appWindows.npm.packageName}
                      description={appWindows.npm.description}
                      isWithTypeScript={appWindows.npm.isWithTypeScript === "true"}
                    />
                  )}
                  {appWindows.web && currentState === 'web' && (
                    <Image 
                      src={appWindows.web.image}
                      alt={appWindows.web.alt}
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
