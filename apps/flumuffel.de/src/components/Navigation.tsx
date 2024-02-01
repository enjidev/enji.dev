import clsx from 'clsx';

import { GitHubIcon, TwitterIcon } from '@/components/Icons';
import NavIcon from '@/components/navigations/NavIcon';
import NavIconQuickAccess from '@/components/navigations/NavIconQuickAccess';
import NavLink from '@/components/navigations/NavLink';
import NavLinkDropdown from '@/components/navigations/NavLinkDropdown';
import NavLinkExpanded from '@/components/navigations/NavLinkExpanded';
import NavLogo from '@/components/navigations/NavLogo';

import useOnScroll from '@/hooks/useOnScroll';

const workLinks = [
  // { title: 'Skills & Tools', href: '/ich/skills-and-tools' },
  // { title: 'Erfahrung', href: '/ich/experience' },
  // { title: 'Kontaktieren', href: '/ich/contact' },
];

function Navbar() {
  const isScrolled = useOnScroll(0);

  return (
    <header
      className={clsx('fixed top-0 right-0 left-0 z-[1000]', 'fm:absolute')}
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
          <nav className={clsx('flex', 'md:gap-2')} data-accent="violet">
            <NavLogo href="/" title="Home" />
            <ul className={clsx('flex items-center', 'md:gap-1')}>
              <li>
                <NavLink title="Projekte" href="/projekte" />
              </li>
              <li>
                <NavLink title="Blog" href="/blog" />
              </li>
              <li>
                <NavLink title="HHI" href="/heute-habe-ich" />
              </li>
              {workLinks.length > 0 && (
                <>
                  <li className={clsx('lg:hidden')} data-accent="blue">
                    <NavLinkDropdown title="Ich" items={workLinks} />
                  </li>
                  <li className={clsx('hidden lg:block')} data-accent="blue">
                    <NavLinkExpanded title="Ich" items={workLinks} />
                  </li>
                </>
              )}
            </ul>
          </nav>
          <ul className={clsx('flex items-center')}>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://twitter.com/flumuffel"
                icon={<TwitterIcon className={clsx('h-5 w-5')} />}
                title="Twitter"
              />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://github.com/flumuffel"
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
