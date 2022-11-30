import clsx from 'clsx';
import useScrollTop from '@/hooks/useScrollTop';
import useOnExit from '@/hooks/useOnExit';
import { FigmaIcon, GitHubIcon, TwitterIcon } from '@/components/shared/Icons';
import NavIcon from '@/components/shared/Navigation/NavIcon';
import NavLogo from '@/components/shared/Navigation/NavLogo';
import NavLink from '@/components/shared/Navigation/NavLink';
import NavIconTheme from '@/components/shared/Navigation/NavIconTheme';
import NavLinkDropdown from '@/components/shared/Navigation/NavLinkDropdown';
import NavLinkExpanded from '@/components/shared/Navigation/NavLinkExpanded';

const workLinks = [
  { title: 'Skills & Tools', href: '/work/skills-and-tools' },
  { title: 'Experience', href: '/work/experience' },
  { title: 'Studio', href: '/work/studio' },
  { title: 'Contact', href: '/work/contact' },
];

const Navbar = () => {
  const position = useScrollTop();
  const isExit = useOnExit('#page-header');

  return (
    <nav
      className={clsx('fixed right-0 left-0 z-[1000] transition', [
        position > 0 ? 'translate-y-0' : 'translate-y-2',
      ])}
    >
      <div
        className={clsx(
          'pointer-events-none fixed top-0 left-0 right-0 h-16 border-b border-divider-light backdrop-blur transition',
          'dark:border-divider-dark',
          [
            !isExit
              ? ['bg-slate-100/80', 'dark:bg-[#0c1222]/80']
              : ['bg-white/70', 'dark:bg-slate-900/80'],
          ],
          [
            position > 0
              ? 'translate-y-0 opacity-100'
              : 'translate-y-2 opacity-0',
          ]
        )}
      />
      <div className={clsx('content-wrapper-max')}>
        <div
          className={clsx(
            'relative z-50 flex h-16 items-center justify-between px-2 text-sm',
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
    </nav>
  );
};

export default Navbar;
