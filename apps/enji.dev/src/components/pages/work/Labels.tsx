import clsx from 'clsx';

interface LabelProps {
  children: React.ReactNode;
  indicator: number;
}

export function Label({ indicator, children }: LabelProps) {
  const percentage = Math.min(100, Math.max(0, indicator));

  return (
    <span className={clsx('label')}>
      {children}
      <span
        className={clsx('label__indicator')}
        style={{ width: `${percentage}%` }}
        aria-label={`Label percentage: ${percentage}%`}
      />
    </span>
  );
}

interface LabelsProps {
  title: string;
  children: React.ReactElement<LabelProps> | React.ReactElement<LabelProps>[];
}

function Labels({ title, children }: LabelsProps) {
  return (
    <div
      className={clsx(
        'flex flex-col items-start gap-2',
        'sm:flex-row sm:gap-6'
      )}
    >
      <div className={clsx('w-48', 'sm:gap-4 sm:text-right')}>
        <strong className={clsx('text-sm')}>{title}</strong>
      </div>
      <div className={clsx('flex flex-1 flex-wrap gap-2')}>{children}</div>
    </div>
  );
}

export default Labels;
