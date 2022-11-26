import clsx from 'clsx';
import Link from 'next/link';

interface NavLink {
  title: string;
  href: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary';
}

export const NavLink = ({
  title,
  href,
  icon = null,
  color = 'primary',
}: NavLink) => {
  return (
    <Link
      href={href}
      className={clsx('nav-link', [
        color === 'primary' ? 'nav-link--primary' : 'nav-link--secondary',
      ])}
    >
      {title}
      {icon}
    </Link>
  );
};

export default NavLink;
