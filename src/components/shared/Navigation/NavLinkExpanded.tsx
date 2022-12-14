import clsx from 'clsx';
import React from 'react';

import { ChevronRightIcon } from '@/components/shared/Icons';
import { NavLink } from '@/components/shared/Navigation/NavLink';

type NavLink = {
  href: string;
  title: string;
};

interface NavLinkExpandedProps {
  title: string;
  items: Array<NavLink>;
}

const NavLinkExpanded = ({ title, items }: NavLinkExpandedProps) => {
  return (
    <div className={clsx('flex')}>
      <div
        className={clsx(
          'nav-link nav-link--label pointer-events-none ml-2 mr-2'
        )}
      >
        {title}
        <ChevronRightIcon className={clsx('h-3 w-3')} />
      </div>
      <ul className={clsx('flex items-center')}>
        {items.map(({ title, href }, idx) => (
          <React.Fragment key={href}>
            <li>
              <NavLink title={title} href={href} />
            </li>
            {idx !== items.length - 1 && (
              <li>
                <div className="nav-link__separator">&middot;</div>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default NavLinkExpanded;
