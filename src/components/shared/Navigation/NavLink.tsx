import clsx from 'clsx';
import Link from 'next/link';

interface NavLink {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

export const NavLink = ({ title, href, icon = null }: NavLink) => {
  return (
    <Link href={href} className={clsx('nav-link')}>
      {title}
      {icon}
    </Link>
  );
};

export default NavLink;
