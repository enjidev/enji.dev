import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Logo from '@/components/Logo';
import {
  DarkIcon,
  GitHubIcon,
  LightIcon,
  TwitterIcon,
} from '@/components/Icons';
import type { ReactElement } from 'react';

interface NavItemProps {
  href: string;
  title: string;
  active?: boolean;
}

const NavItem = ({ href, title, active = false }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={`link flex h-9 items-center rounded-lg px-2 text-gray-900 dark:text-slate-200 ${
        active && 'active'
      }`}
    >
      {title}
    </Link>
  );
};

interface NavItemIconProps {
  href: string;
  icon: ReactElement;
  title: string;
}

const NavItemIcon = ({ href, icon, title }: NavItemIconProps) => {
  return (
    <a
      href={href}
      className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-900 dark:text-slate-200"
      aria-label={title}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
};

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-100 text-gray-900 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
      aria-label="Toggle Theme"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && resolvedTheme === 'dark' ? (
        <LightIcon className="h-5 w-5" />
      ) : (
        <DarkIcon className="h-5 w-5" />
      )}
    </button>
  );
};

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-slate-100 bg-white py-4 px-2 text-sm dark:border-slate-800 dark:bg-slate-900 md:px-4">
      <div>
        <ul className="flex items-center font-semibold md:gap-1">
          <li>
            <Link
              href="/"
              className="md:link flex h-9 items-center gap-2 rounded-lg px-2 text-2xl font-extrabold text-gray-900"
              aria-label="Home"
            >
              <Logo />
            </Link>
          </li>
          <li>
            <NavItem href="/" title="Blog" />
          </li>
          <li>
            <NavItem href="/" title="Projects" />
          </li>
          <li>
            <NavItem href="/" title="About" />
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-2">
          <li>
            <NavItemIcon
              href="https://twitter.com/enjidev"
              icon={<TwitterIcon className="h-5 w-5" />}
              title="Twitter"
            />
          </li>
          <li className="hidden sm:block">
            <NavItemIcon
              href="https://github.com/enjidev"
              icon={<GitHubIcon className="h-5 w-5" />}
              title="GitHub"
            />
          </li>
          <li>
            <div className="h-3 w-[1px] bg-slate-200 dark:bg-slate-700"></div>
          </li>
          <li className="mx-2">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
