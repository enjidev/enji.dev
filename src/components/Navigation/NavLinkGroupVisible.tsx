import clsx from 'clsx';
import { ChevronRightIcon } from '@/components/Icons';

type NavMenuColors = 'blue' | 'purple';
type NavMenuLink = { title: string; href: string };

interface NavLinkGroupVisibleProps extends NavMenuLink {
  children: React.ReactNode;
  color: NavMenuColors;
}
const NavLinkGroupShow = ({
  title,
  color,
  children,
}: NavLinkGroupVisibleProps) => {
  return (
    <div className={clsx('flex items-center gap-1')}>
      <div
        className={clsx('nav-link-group cursor-default', [
          color === 'purple' && 'nav-link-group--purple',
          color === 'blue' && 'nav-link-group--blue',
        ])}
      >
        {title}
        <ChevronRightIcon className={clsx('h-3 w-3')} />
      </div>
      {children}
    </div>
  );
};

export default NavLinkGroupShow;
