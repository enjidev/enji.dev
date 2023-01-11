import { Menu } from '@headlessui/react';
import clsx from 'clsx';
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
        'flex w-full items-center gap-4 px-5 py-2 text-sm',
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
      rel="noreferrer"
      className={clsx(
        'flex w-full items-center gap-4 px-5 py-2 text-sm',
        ['hover:bg-slate-100', 'hover:dark:bg-[#1d263a]'],
        [active && ['bg-slate-100', 'dark:bg-[#1d263a]']]
      )}
    >
      {children}
    </a>
  )
);

interface ShareButtonProps {
  onItemClick?: () => void;
}

function ShareButton({ onItemClick = () => {} }: ShareButtonProps) {
  const currentUrl = useCurrentUrl();

  const handleCopy = async () => {
    onItemClick();

    try {
      const content = currentUrl;
      await navigator.clipboard.writeText(content);
    } catch (err) {
      //
    }
  };

  const handleLink = () => {
    onItemClick();
  };

  return (
    <Menu>
      <Menu.Button
        className={clsx(
          'flex h-10 w-10 items-center justify-center rounded-full bg-slate-100',
          'dark:bg-[#1d263a]'
        )}
      >
        <ShareIcon className={clsx('h-5 w-5')} />
      </Menu.Button>
      <Menu.Items
        className={clsx(
          'border-divider-light absolute -top-2 right-0 z-[902] w-56 -translate-y-full overflow-hidden rounded-xl border bg-white pb-3',
          'dark:border-divider-dark dark:bg-[#161e31]'
        )}
      >
        <div className={clsx('py-4 px-5 text-sm font-bold')}>
          Share this on:
        </div>
        <Menu.Item>
          {({ active }) => (
            <ShareItemLink
              active={active}
              href={`https://twitter.com/intent/tweet?via=enjidev&url=${currentUrl}`}
              onClick={handleLink}
            >
              <TwitterIcon className={clsx('h-5 w-5')} />
              <span className={clsx('flex items-center gap-2')}>
                Twitter
                <ExternalLink className={clsx('h-4 w-4')} />
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
              <NoteIcon className={clsx('h-5 w-5')} />
              Copy link
            </ShareItemButton>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default ShareButton;
