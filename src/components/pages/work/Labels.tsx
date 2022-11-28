import clsx from 'clsx';

interface LabelProps {
  title: string;
  indicator: number;
}

export const Label = ({ title, indicator }: LabelProps) => {
  const percentage = Math.min(100, Math.max(0, indicator));

  return (
    <div className={clsx('label')}>
      <div
        className={clsx('label__indicator')}
        style={{ width: `${percentage}%` }}
      />
      {title}
    </div>
  );
};

interface LabelsProps {
  title: string;
  items: Array<LabelProps>;
}

const Labels = ({ title, items }: LabelsProps) => {
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
      <div className={clsx('flex flex-1 flex-wrap gap-2')}>
        {items.map(({ title, indicator }) => (
          <Label key={title} title={title} indicator={indicator} />
        ))}
      </div>
    </div>
  );
};

export default Labels;
