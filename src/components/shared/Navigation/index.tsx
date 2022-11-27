import clsx from 'clsx';
import { GitHubIcon, TwitterIcon } from '@/components/shared/Icons';
import NavIcon from '@/components/shared/Navigation/NavIcon';
import NavLogo from '@/components/shared/Navigation/NavLogo';
import NavLink from '@/components/shared/Navigation/NavLink';
import NavIconTheme from '@/components/shared/Navigation/NavIconTheme';
import NavLinkDropdown from '@/components/shared/Navigation/NavLinkDropdown';
import NavLinkExpanded from './NavLinkExpanded';

const workLinks = [
  { title: 'Skills & Tools', href: '/work/skills-and-tools' },
  { title: 'Testimonials', href: '/work/testimonials' },
  { title: 'Studio', href: '/work/studio' },
];

const Navbar = () => {
  return (
    <nav
      className={clsx(
        'z-[1000] border-b border-divider-light bg-white',
        'dark:border-divider-dark dark:bg-slate-900'
      )}
    >
      <div className={clsx('content-wrapper-max')}>
        <div
          className={clsx(
            'relative z-50 flex items-center justify-between py-4 px-2 text-sm',
            'md:px-4'
          )}
        >
          <div className={clsx('flex', 'md:gap-2')}>
            <NavLogo href="/" title="Home" />
            <ul className={clsx('flex items-center', 'md:gap-1')}>
              <li>
                <NavLink title="Projects" href="/projects" />
              </li>
              <li>
                <NavLink title="Blog" href="/blog" />
              </li>
              <li className={clsx('lg:hidden')}>
                <NavLinkDropdown title="Work" items={workLinks} />
              </li>
              <li className={clsx('hidden lg:block')}>
                <NavLinkExpanded title="Work" items={workLinks} />
              </li>
            </ul>
          </div>
          <ul className={clsx('flex items-center gap-2')}>
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
    </nav>
  );
};

export default Navbar;
