import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import useShortcut from '@/hooks/useShortcut';
import Logo from '@/components/Logo';
import {
  DarkIcon,
  GitHubIcon,
  LightIcon,
  TwitterIcon,
} from '@/components/Icons';

import type { ReactElement } from 'react';

interface NavLogoProps {
  href: string;
  title: string;
}

const NavLogo = ({ href, title }: NavLogoProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={clsx('flex h-9 items-center gap-2 rounded-xl px-2', [
        isActive ? 'md:link md:link--active' : 'md:link',
      ])}
      aria-label={title}
    >
      <Logo active={isActive} />
    </Link>
  );
};

interface NavItemProps {
  href: string;
  title: string;
}

const NavItem = ({ href, title }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        'flex h-9 items-center justify-center gap-1.5 rounded-xl px-2',
        [isActive ? 'link link--active' : 'link']
      )}
    >
      {title}
    </Link>
  );
};

interface NavItemIconProps {
  href: string;
  icon: ReactElement;
  title: string;
  label?: string;
}

const NavItemIcon = ({ href, icon, title, label }: NavItemIconProps) => {
  return (
    <a
      href={href}
      className={clsx('flex items-center justify-center rounded-xl')}
      aria-label={title}
      target="_blank"
      rel="noreferrer"
    >
      <span
        className={clsx(
          'flex h-9 w-9 items-center justify-center rounded-xl',
          'dark:text-slate-200'
        )}
      >
        {icon}
      </span>
      {label && (
        <span className={clsx('label mt-0.5 mr-2', 'md:block')}>{label}</span>
      )}
    </a>
  );
};

interface NavItemIconButtonProps {
  href: string;
  icon: ReactElement;
  title: string;
  label: string;
}

const NavItemIconButton = ({
  href,
  icon,
  title,
  label,
}: NavItemIconButtonProps) => {
  return (
    <a
      href={href}
      className={clsx('label label--icon')}
      aria-label={title}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
      {label}
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
      className={clsx(
        'flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-gray-800',
        'hover:bg-slate-200',
        'dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50'
      )}
      aria-label="Toggle Theme"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && resolvedTheme === 'dark' ? (
        <LightIcon className={clsx('h-5 w-5')} />
      ) : (
        <DarkIcon className={clsx('h-5 w-5')} />
      )}
    </button>
  );
};

const Navbar = () => {
  useShortcut('/', () => router.push('/'));
  const router = useRouter();

  return (
    <nav
      className={clsx(
        'flex items-center justify-between border-b border-divider-light bg-white px-2 py-4 text-sm',
        'md:px-4',
        'dark:border-divider-dark dark:bg-slate-900'
      )}
    >
      <div>
        <ul className={clsx('flex items-center font-semibold', 'md:gap-1')}>
          <li>
            <NavLogo href="/" title="Home" />
          </li>
          <li>
            <NavItem href="/services" title="Services" />
          </li>
          <li>
            <NavItem href="/about" title="About" />
          </li>
        </ul>
      </div>
      <div>
        <ul className={clsx('flex items-center gap-2')}>
          <li className={clsx('hidden', 'sm:block')}>
            <NavItemIcon
              href="https://github.com/enjidev"
              icon={<GitHubIcon className={clsx('h-5 w-5')} />}
              title="GitHub"
            />
          </li>
          <li>
            <NavItemIconButton
              href="https://twitter.com/enjidev"
              icon={<TwitterIcon className={clsx('h-5 w-5')} />}
              title="Twitter"
              label="Twitter"
            />
          </li>
          <li>
            <div
              className={clsx('h-3 w-[1px] bg-slate-200', 'dark:bg-slate-700')}
            ></div>
          </li>
          <li className={clsx('mr-2')}>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
