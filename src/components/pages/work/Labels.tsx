import clsx from 'clsx';

interface LabelProps {
  children: React.ReactNode;
  indicator: number;
}

export const Label = ({ indicator, children }: LabelProps) => {
  const percentage = Math.min(100, Math.max(0, indicator));

  return (
    <span className={clsx('label')}>
      <div
        className={clsx('label__indicator')}
        style={{ width: `${percentage}%` }}
      />
      {children}
    </span>
  );
};

interface LabelsProps {
  title: string;
  children: React.ReactElement<LabelProps> | React.ReactElement<LabelProps>[];
}

const Labels = ({ title, children }: LabelsProps) => {
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
};

export default Labels;
