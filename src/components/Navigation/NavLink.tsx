import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavMenuColors = 'blue' | 'purple';
type NavMenuLink = { title: string; href: string };

interface NavLink extends NavMenuLink {
  colors: NavMenuColors;
}

export const NavLink = ({ title, href, colors = 'purple' }: NavLink) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={clsx('nav-link', [
        colors === 'purple' && 'nav-link--purple',
        colors === 'blue' && 'nav-link--blue',
        isActive && 'nav-link--active',
      ])}
    >
      {title}
    </Link>
  );
};

export default NavLink;
