import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { GitHubIcon, ReactIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';

import LandingPageImg from './images/home.png';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'github' | 'nextjsblog'>(
    'nextjsblog'
  );

  return (
    <>
      <SectionTitle
        title="Next.js 个人网站"
        caption="ylBlog"
        description="一个现代化的 Next.js 个人网站模板，旨在展示个人作品和经历，结合简洁设计与流畅的用户体验。"
        buttons={[
          {
            title: '查看原 Github [enjidev/enji.dev]',
            href: 'https://github.com/enjidev/enji.dev',
          },
          {
            title: '查看源 Github [Yulo7281/ylBlog]',
            href: 'https://github.com/Yulo7281/ylBlog',
          },
        ]}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="预览"
                icon={<ReactIcon className={clsx('my-2 h-16 w-16')} />}
                description="本网站属于当前项目"
                active={currentState === 'nextjsblog'}
                onClick={() => setCurrentState('nextjsblog')}
              />
              <SectionButton
                title="在 GitHub 上可用"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="使用 MIT 许可证访问 GitHub 仓库"
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
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
                      icon: <ReactIcon className="h-4 w-4" />,
                      title: 'www.yulo.com - nextjsblog',
                      isActive: currentState === 'nextjsblog',
                      onClick: () => setCurrentState('nextjsblog'),
                    },
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'Yulo7281/ylBlog - GitHub',
                      isActive: currentState === 'github',
                      onClick: () => setCurrentState('github'),
                    },
                  ]}
                >
                  {currentState === 'nextjsblog' && (
                    <Link className="block h-full" href="/">
                      <Image
                        src={LandingPageImg}
                        // width={500}
                        // height={500}
                        alt="Unstuck Landing Page"
                        placeholder="blur" // Optional blur-up while loading
                      />
                    </Link>
                  )}
                  {currentState === 'github' && (
                    <a
                      href="https://github.com/Yulo7281/ylBlog"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubWireframe
                        author="Yulo"
                        license="MIT"
                        repository="ylBlog"
                        description="一个现代化的 Next.js 个人网站模板，旨在展示个人作品和经历，结合简洁设计与流畅的用户体验。"
                      />
                    </a>
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
