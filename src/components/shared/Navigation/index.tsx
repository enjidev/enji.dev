import clsx from 'clsx';

import { FigmaIcon, GitHubIcon, TwitterIcon } from '@/components/shared/Icons';
import NavIcon from '@/components/shared/Navigation/NavIcon';
import NavIconTheme from '@/components/shared/Navigation/NavIconTheme';
import NavLink from '@/components/shared/Navigation/NavLink';
import NavLinkDropdown from '@/components/shared/Navigation/NavLinkDropdown';
import NavLinkExpanded from '@/components/shared/Navigation/NavLinkExpanded';
import NavLogo from '@/components/shared/Navigation/NavLogo';

import useOnScroll from '@/hooks/useOnScroll';

const workLinks = [
  { title: 'Skills & Tools', href: '/work/skills-and-tools' },
  { title: 'Experience', href: '/work/experience' },
  { title: 'Studio', href: '/work/studio' },
  { title: 'Contact', href: '/work/contact' },
];

function Navbar() {
  const isScrolled = useOnScroll(0);

  return (
    <header
      className={clsx(
        'fixed right-0 left-0 z-[1000] translate-y-0 transition',
        [isScrolled ? 'translate-y-0' : 'translate-y-2']
      )}
    >
      <div
        className={clsx(
          'pointer-events-none fixed top-0 left-0 right-0 h-16 translate-y-0 border-b border-divider-light bg-white/70 opacity-100 backdrop-blur transition',
          'dark:border-divider-dark dark:bg-slate-900/80',
          [isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0']
        )}
      />
      <div className={clsx('content-wrapper-max')}>
        <div
          className={clsx(
            'relative z-50 flex h-16 items-center justify-between px-2 text-sm',
            'md:px-4'
          )}
        >
          <nav className={clsx('flex', 'md:gap-2')} data-accent="violet">
            <NavLogo href="/" title="Home" />
            <ul className={clsx('flex items-center', 'md:gap-1')}>
              <li>
                <NavLink title="Projects" href="/projects" />
              </li>
              <li>
                <NavLink title="Blog" href="/blog" />
              </li>
              <li className={clsx('lg:hidden')} data-accent="blue">
                <NavLinkDropdown title="Work" items={workLinks} />
              </li>
              <li className={clsx('hidden lg:block')} data-accent="blue">
                <NavLinkExpanded title="Work" items={workLinks} />
              </li>
            </ul>
          </nav>
          <ul className={clsx('flex items-center gap-2')}>
            <li className={clsx('-mr-1 hidden', 'sm:block')}>
              <NavIcon
                href="https://figma.com/@enjidev"
                icon={<FigmaIcon className={clsx('h-5 w-5')} />}
                title="Figma"
              />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://github.com/enjidev"
                icon={<GitHubIcon className={clsx('h-5 w-5')} />}
                title="GitHub"
              />
            </li>
            <li>
              <NavIcon
                href="https://twitter.com/enjidev"
                icon={<TwitterIcon className={clsx('h-5 w-5')} />}
                title="Twitter"
                label="enjidev"
              />
            </li>
            <li>
              <div
                className={clsx(
                  'h-3 w-[1px] bg-slate-200',
                  'dark:bg-slate-700'
                )}
              />
            </li>
            <li className={clsx('mr-2')}>
              <NavIconTheme />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
