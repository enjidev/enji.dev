import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';

import { GitHubIcon, TwitterIcon } from '@/components/Icons';
import NavIcon from '@/components/navigations/NavIcon';
import NavIconQuickAccess from '@/components/navigations/NavIconQuickAccess';
import NavLink from '@/components/navigations/NavLink';
import NavLinkDropdown from '@/components/navigations/NavLinkDropdown';
import NavLinkExpanded from '@/components/navigations/NavLinkExpanded';
import NavLogo from '@/components/navigations/NavLogo';

import useOnScroll from '@/hooks/useOnScroll';

function Navbar() {
  const isScrolled = useOnScroll(0);

  const workLinks = useMemo(
    () => [
      { title: '技能和工具', href: '/work/skills-and-tools' },
      { title: '经验', href: '/work/experience' },
      { title: '设备', href: '/work/studio' },
      { title: '联系方式', href: '/work/contact' },
    ],
    []
  );
  const moreLinks = useMemo(
    () => [
      { title: '宝藏项目', href: '/projects' },
      { title: '友情链接', href: '/links' },
      { title: '留言反馈', href: '/feedback' },
    ],
    []
  );

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 768);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const combinedMoreLinks = useMemo(
    () => (isSmallScreen ? [...workLinks, ...moreLinks] : moreLinks),
    [workLinks, moreLinks, isSmallScreen]
  );

  return (
    <header
      className={clsx('fixed left-0 right-0 top-0 z-[1000]', 'fm:absolute')}
    >
      <div
        className={clsx(
          'fixed inset-0 h-16',
          [
            isScrolled === true && [
              'border-divider-light border-b bg-white/70 backdrop-blur',
              'dark:border-divider-dark dark:bg-slate-900/80',
            ],
          ],
          'fm:hidden'
        )}
      />
      <div className={clsx('h-2', [isScrolled === true && ['-mt-2']])} />
      <div className={clsx('content-wrapper-max')}>
        <div
          className={clsx(
            'relative z-50 flex h-16 items-center justify-between px-2 text-sm',
            'md:px-4'
          )}
        >
          {/* 左侧 logo */}
          <nav className={clsx('flex', 'md:gap-2')} data-accent="violet">
            <NavLogo href="/" title="首页" />
          </nav>

          {/* 中间导航栏 */}
          <ul className={clsx('flex items-center', 'md:gap-1')}>
            <li>
              <NavLink title="博客" href="/blog" />
            </li>
            <li>
              <NavLink title="T.I.L" href="/today-i-learned" />
            </li>
            <li className={clsx('hidden md:block')} data-accent="blue">
              <NavLinkDropdown title="工作" items={workLinks} />
            </li>
            <li className={clsx('')} data-accent="blue">
              <NavLinkDropdown title="更多" items={combinedMoreLinks} />
            </li>
          </ul>

          {/* 右侧图标 */}
          <ul className={clsx('flex items-center')}>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://github.com/Yulo7281"
                icon={<GitHubIcon className={clsx('h-5 w-5')} />}
                title="GitHub"
              />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
              <div
                className={clsx(
                  'ml-2 mr-4 h-3 w-[1px] bg-slate-200',
                  'dark:bg-slate-700'
                )}
              />
            </li>
            <li className={clsx('mr-2')}>
              <NavIconQuickAccess />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
