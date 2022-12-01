import clsx from 'clsx';

interface StackProps {
  spacing: number;
  children: React.ReactNode;
}

export const VStack = ({ spacing, children }: StackProps) => {
  return (
    <div className={clsx('flex flex-col flex-wrap')} style={{ gap: spacing }}>
      {children}
    </div>
  );
};

export const HStack = ({ spacing, children }: StackProps) => {
  return (
    <div className={clsx('flex flex-row flex-wrap')} style={{ gap: spacing }}>
      {children}
    </div>
  );
};
