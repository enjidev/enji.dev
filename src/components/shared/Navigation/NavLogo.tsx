import clsx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '@/components/shared/Logo';

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
      className={clsx('flex h-9 items-center gap-2 rounded-xl px-2')}
      aria-label={title}
    >
      <Logo active={isActive} />
    </Link>
  );
};

export default NavLogo;
