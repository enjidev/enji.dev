import clsx from 'clsx';

import { ErrorIcon, InfoIcon, NoteIcon, WarningIcon } from '@/components/Icons';

import type { PropsWithChildren, ReactElement } from 'react';

interface CalloutProps {
  variant?: 'neutral' | 'info' | 'warning' | 'danger';
}

function Callout({
  variant = 'neutral',
  children = null,
}: PropsWithChildren<CalloutProps>) {
  let data: {
    title: string;
    icon: ReactElement;
    modifier: string;
  };

  switch (variant) {
    case 'neutral':
      data = {
        title: 'Note',
        icon: <NoteIcon />,
        modifier: '',
      };
      break;
    case 'info':
      data = {
        title: 'Info',
        icon: <InfoIcon />,
        modifier: 'mdx-callout--info',
      };
      break;
    case 'warning':
      data = {
        title: 'Heads Up',
        icon: <WarningIcon />,
        modifier: 'mdx-callout--warning',
      };
      break;
    case 'danger':
      data = {
        title: 'Important',
        icon: <ErrorIcon />,
        modifier: 'mdx-callout--danger',
      };
      break;
    default:
  }

  return (
    <div className={clsx('mdx-callout', data.modifier)}>
      <div className={clsx('mdx-callout__header')}>
        {data.icon}
        {data.title}
      </div>
      <div className={clsx('mdx-callout__content')}>{children}</div>
    </div>
  );
}

export default Callout;
