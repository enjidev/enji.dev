import clsx from 'clsx';
import Link from 'next/link';

interface NavLink {
  title: string;
  href: string;
}

export const NavLink = ({ title, href }: NavLink) => {
  return (
    <Link href={href} className={clsx('nav-link nav-link--purple')}>
      {title}
    </Link>
  );
};

export default NavLink;
