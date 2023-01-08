import clsx from 'clsx';

import type { PropsWithChildren } from 'react';

interface StackProps {
  spacing: number;
}

export function VStack({
  spacing,
  children = null,
}: PropsWithChildren<StackProps>) {
  return (
    <div className={clsx('flex flex-col flex-wrap')} style={{ gap: spacing }}>
      {children}
    </div>
  );
}

export function HStack({
  spacing,
  children = null,
}: PropsWithChildren<StackProps>) {
  return (
    <div className={clsx('flex flex-row flex-wrap')} style={{ gap: spacing }}>
      {children}
    </div>
  );
}
