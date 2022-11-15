import clsx from 'clsx';

type NavMenuColors = 'blue' | 'purple';

interface NavLinkSeparatorProps {
  colors: NavMenuColors;
}

const NavLinkSeparator = ({ colors }: NavLinkSeparatorProps) => {
  return (
    <div
      className={clsx('nav-link__separator', [
        colors === 'purple' && 'nav-link__separator--purple',
        colors === 'blue' && 'nav-link__separator--blue',
      ])}
    >
      &middot;
    </div>
  );
};

export default NavLinkSeparator;
