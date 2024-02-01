import { Menu } from '@headlessui/react';
import { ShareType } from '@prisma/client';
import clsx from 'clsx';
import { m } from 'framer-motion';
import { forwardRef } from 'react';

import {
  ExternalLink,
  NoteIcon,
  ShareIcon,
  TwitterIcon,
} from '@/components/Icons';

import useCurrentUrl from '@/hooks/useCurrentUrl';

import type { PropsWithChildren, Ref } from 'react';

interface ShareItemProps extends PropsWithChildren {
  active: boolean;
}

interface ShareItemButtonProps extends ShareItemProps {
  onClick: () => void;
}

const ShareItemButton = forwardRef(
  (
    { active, children, onClick }: ShareItemButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => (
    <button
      type="button"
      ref={ref}
      className={clsx(
        'flex w-full items-center gap-3 px-4 py-2 text-[13px]',
        ['hover:bg-slate-100', 'hover:dark:bg-[#1d263a]'],
        [active && ['bg-slate-100', 'dark:bg-[#1d263a]']]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
);

interface ShareItemLinkProps extends ShareItemProps {
  href: string;
  onClick: () => void;
}

const ShareItemLink = forwardRef(
  (
    { href, active, onClick, children }: ShareItemLinkProps,
    ref: Ref<HTMLAnchorElement>
  ) => (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noreferrer nofollow"
      className={clsx(
        'flex w-full items-center gap-3 px-4 py-2 text-[13px]',
        ['hover:bg-slate-100', 'hover:dark:bg-[#1d263a]'],
        [active && ['bg-slate-100', 'dark:bg-[#1d263a]']]
      )}
    >
      {children}
    </a>
  )
);

const animation = {
  hide: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.18 } },
};

interface ShareButtonProps {
  onItemClick?: (type: ShareType) => void;
}

function ShareButton({ onItemClick = () => {} }: ShareButtonProps) {
  const currentUrl = useCurrentUrl();

  const handleCopy = async () => {
    try {
      const content = currentUrl;
      await navigator.clipboard.writeText(content);

      onItemClick('CLIPBOARD');
    } catch (err) {
      //
    }
  };

  const handleTwitter = () => {
    onItemClick('TWITTER');
  };

  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button
            title="Share"
            aria-label="Share"
            className={clsx(
              'relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-200',
              'dark:bg-[#1d263a]'
            )}
          >
            <ShareIcon className={clsx('h-5 w-5')} />
          </Menu.Button>
          {open && (
            <Menu.Items
              static
              as={m.div}
              variants={animation}
              initial="hide"
              animate="show"
              className={clsx(
                'border-divider-light absolute bottom-24 right-2 z-[902] flex w-56 flex-col overflow-hidden rounded-2xl border bg-white/70 pb-2 pt-1 backdrop-blur',
                'dark:border-divider-dark dark:bg-slate-900/80'
              )}
            >
              <div
                className={clsx(
                  'py-3 px-4 text-center text-[13px] text-lg font-bold'
                )}
              >
                Share this on
              </div>
              <Menu.Item>
                {({ active }) => (
                  <ShareItemLink
                    active={active}
                    href={`https://twitter.com/intent/tweet?via=enjidev&url=${currentUrl}`}
                    onClick={handleTwitter}
                  >
                    <TwitterIcon className={clsx('h-4 w-4')} />
                    <span className={clsx('flex items-center gap-2')}>
                      Twitter
                      <ExternalLink className={clsx('h-3 w-3')} />
                    </span>
                  </ShareItemLink>
                )}
              </Menu.Item>
              <div
                className={clsx(
                  'border-divider-light my-2 border-t',
                  'dark:border-divider-dark'
                )}
              />
              <Menu.Item>
                {({ active }) => (
                  <ShareItemButton active={active} onClick={handleCopy}>
                    <NoteIcon className={clsx('h-4 w-4')} />
                    Copy link
                  </ShareItemButton>
                )}
              </Menu.Item>
            </Menu.Items>
          )}
        </>
      )}
    </Menu>
  );
}

export default ShareButton;
