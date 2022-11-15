import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRightIcon } from '@/components/Icons';

type NavMenuColors = 'blue' | 'purple';
type NavMenuLink = { title: string; href: string };

interface NavLinkGroupProps extends NavMenuLink {
  children: React.ReactNode;
  colors: NavMenuColors;
}

const animation = {
  hide: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0 },
};

const animationChildren = {
  hide: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0 },
};

const NavLinkGroup = ({ title, colors, children }: NavLinkGroupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx('flex items-center gap-2')}>
      <div
        className={clsx('nav-link-group', [
          colors === 'purple' && 'nav-link-group--purple',
          colors === 'blue' && 'nav-link-group--blue',
        ])}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronRightIcon
          className={clsx('h-3 w-3 rotate-90', [isOpen && '-rotate-90'])}
        />
      </div>
      <motion.div
        variants={animation}
        initial={isOpen ? 'show' : 'hide'}
        animate={isOpen ? 'show' : 'hide'}
        className={clsx(
          'absolute -bottom-7 left-4 right-4 mx-auto flex items-center justify-center rounded-full border border-divider-light bg-white px-4',
          'dark:border-divider-dark dark:bg-slate-900',
          [isOpen ? 'pointer-events-auto' : 'pointer-events-none']
        )}
      >
        <motion.div
          variants={animationChildren}
          initial={isOpen ? 'show' : 'hide'}
          animate={isOpen ? 'show' : 'hide'}
          transition={{ delay: 0.1 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NavLinkGroup;
