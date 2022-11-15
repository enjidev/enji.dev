import clsx from 'clsx';
import { useRouter } from 'next/router';
import useShortcut from '@/hooks/useShortcut';
import { GitHubIcon, TwitterIcon } from '@/components/Icons';
import NavIcon from '@/components/Navigation/NavIcon';
import NavLogo from '@/components/Navigation/NavLogo';
import NavLink from '@/components/Navigation/NavLink';
import NavLinkGroup from '@/components/Navigation/NavLinkGroup';
import NavLinkGroupVisible from '@/components/Navigation/NavLinkGroupVisible';
import NavIconTheme from '@/components/Navigation/NavIconTheme';
import NavLinkSeparator from '@/components/Navigation/NavLinkSeparator';

const NavMainItems = () => {
  return (
    <ul className={clsx('flex items-center gap-1 font-bold', 'md:gap-2')}>
      <li>
        <NavLink title="Projects" href="/projects" colors="blue" />
      </li>
      <li>
        <NavLinkSeparator colors="blue" />
      </li>
      <li>
        <NavLink title="Blog" href="/blog" colors="blue" />
      </li>
    </ul>
  );
};

const NavWorkItems = () => {
  return (
    <ul className={clsx('flex items-center gap-1 font-bold', 'md:gap-2')}>
      <li>
        <NavLink title="Skills & Tools" href="/skills" colors="purple" />
      </li>
      <li>
        <NavLinkSeparator colors="purple" />
      </li>
      <li>
        <NavLink title="Services" href="/services" colors="purple" />
      </li>
      <li>
        <NavLinkSeparator colors="purple" />
      </li>
      <li>
        <NavLink title="Contact" href="/contact" colors="purple" />
      </li>
      <li>
        <NavLinkSeparator colors="purple" />
      </li>
      <li>
        <NavLink title="FAQ" href="/faq" colors="purple" />
      </li>
    </ul>
  );
};

const Navbar = () => {
  useShortcut('/', () => router.push('/'));
  const router = useRouter();

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
        <NavMainItems />
        <div className="ml-1 block lg:hidden">
          <NavLinkGroup colors="purple" title="Works" href="/">
            <NavWorkItems />
          </NavLinkGroup>
        </div>
        <div className="ml-1 hidden lg:block">
          <NavLinkGroupVisible colors="purple" title="Works" href="/">
            <NavWorkItems />
          </NavLinkGroupVisible>
        </div>
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
