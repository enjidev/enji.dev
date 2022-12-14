import clsx from 'clsx';
import Link from 'next/link';

export type NavLinkProps = {
  title: string;
  href: string;
  icon?: React.ReactNode;
};

function NavLink({ title, href, icon = null }: NavLinkProps) {
  return (
    <Link href={href} className={clsx('nav-link')}>
      {title}
      {icon}
    </Link>
  );
}

export default NavLink;
