import clsx from 'clsx';
import { ChevronRightIcon } from '@/components/Icons';

type NavMenuColors = 'blue' | 'purple';
type NavMenuLink = { title: string; href: string };

interface NavLinkGroupVisibleProps extends NavMenuLink {
  children: React.ReactNode;
  colors: NavMenuColors;
}
const NavLinkGroupShow = ({
  title,
  colors,
  children,
}: NavLinkGroupVisibleProps) => {
  return (
    <div className={clsx('flex items-center gap-2')}>
      <div
        className={clsx('nav-link-group cursor-default', [
          colors === 'purple' && 'nav-link-group--purple',
          colors === 'blue' && 'nav-link-group--blue',
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
