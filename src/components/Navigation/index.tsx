import clsx from 'clsx';
import { GitHubIcon, TwitterIcon } from '@/components/Icons';
import NavIcon from '@/components/Navigation/NavIcon';
import NavLogo from '@/components/Navigation/NavLogo';
import NavLink from '@/components/Navigation/NavLink';
import NavIconTheme from '@/components/Navigation/NavIconTheme';
import NavLinkSeparator from '@/components/Navigation/NavLinkSeparator';
import NavLinkDropdown from '@/components/Navigation/NavLinkDropdown';

const Navbar = () => {
  return (
    <nav
      className={clsx(
        'relative z-50 flex items-center justify-between border-b border-divider-light bg-white px-2 py-4 text-sm',
        'md:px-4',
        'dark:border-divider-dark dark:bg-slate-900'
      )}
    >
      <div className={clsx('flex', 'md:gap-2')}>
        <NavLogo href="/" title="Home" />
        <ul className={clsx('flex items-center font-bold', 'md:gap-1')}>
          <li>
            <NavLink title="Projects" href="/projects" color="purple" />
          </li>
          <li>
            <NavLinkSeparator />
          </li>
          <li>
            <NavLink title="Studio" href="/studio" color="purple" />
          </li>
          <li>
            <NavLinkSeparator />
          </li>
          <li>
            <NavLinkDropdown
              title="Works"
              items={[
                { title: 'Skills & Tools', href: '/skills' },
                { title: 'Testimonials', href: '/testimonials' },
                { title: 'Contact', href: '/contact' },
                { title: 'FAQ', href: '/faq' },
              ]}
            />
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
          />
        </li>
        <li>
          <div
            className={clsx('h-3 w-[1px] bg-slate-200', 'dark:bg-slate-700')}
          />
        </li>
        <li className={clsx('mr-2')}>
          <NavIconTheme />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
