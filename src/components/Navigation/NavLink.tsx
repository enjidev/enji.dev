import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavMenuColors = 'blue' | 'purple';
type NavMenuLink = { title: string; href: string };

interface NavLink extends NavMenuLink {
  color: NavMenuColors;
}

export const NavLink = ({ title, href, color = 'purple' }: NavLink) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={clsx('nav-link', [
        color === 'purple' && 'nav-link--purple',
        color === 'blue' && 'nav-link--blue',
        isActive && 'nav-link--active',
      ])}
    >
      {title}
    </Link>
  );
};

export default NavLink;
