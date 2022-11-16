import clsx from 'clsx';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { ChevronRightIcon } from '@/components/Icons';

import type { HTMLAttributes, Ref } from 'react';
import type { UrlObject } from 'url';

const animation = {
  hide: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0 },
};

type LinkRefProps = HTMLAttributes<HTMLAnchorElement> & {
  href: string | UrlObject;
};

const LinkRef = forwardRef(
  ({ href, children, ...rest }: LinkRefProps, ref: Ref<HTMLAnchorElement>) => {
    return (
      <Link href={href} ref={ref} {...rest}>
        {children}
      </Link>
    );
  }
);

LinkRef.displayName = 'LinkRef';

type NavLink = {
  href: string;
  title: string;
};

interface NavLinkDropdownProps {
  title: string;
  items: Array<NavLink>;
}

const NavLinkDropdown = ({ title, items }: NavLinkDropdownProps) => {
  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className={clsx('nav-link nav-link--blue')}>
              {title}
              <ChevronRightIcon
                className={clsx('h-3 w-3 rotate-90', [open && '-rotate-90'])}
              />
            </Menu.Button>
            {open && (
              <Menu.Items
                static
                as={motion.div}
                variants={animation}
                initial={'hide'}
                animate={'show'}
                className={clsx(
                  'absolute top-10 z-40 flex w-40 flex-col rounded-xl border border-divider-light bg-white p-2',
                  'dark:border-divider-dark dark:bg-slate-900'
                )}
              >
                {items.map(({ title, href }) => {
                  return (
                    <Menu.Item key={href}>
                      {({ active }) => (
                        <LinkRef
                          href={href}
                          className={clsx('nav-link nav-link--blue h-8', [
                            active && 'nav-link--focus',
                          ])}
                        >
                          {title}
                        </LinkRef>
                      )}
                    </Menu.Item>
                  );
                })}
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    </div>
  );
};

export default NavLinkDropdown;
