import clsx from 'clsx';

type NavMenuColors = 'blue' | 'purple';

interface NavLinkSeparatorProps {
  color: NavMenuColors;
}

const NavLinkSeparator = ({ color }: NavLinkSeparatorProps) => {
  return (
    <div
      className={clsx('nav-link__separator', [
        color === 'purple' && 'nav-link__separator--purple',
        color === 'blue' && 'nav-link__separator--blue',
      ])}
    >
      &middot;
    </div>
  );
};

export default NavLinkSeparator;
