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
  items: Array<LabelProps>;
}

const Labels = ({ items }: LabelsProps) => {
  return (
    <div className={clsx('flex flex-wrap gap-3')}>
      {items.map(({ title, indicator }) => (
        <Label key={title} title={title} indicator={indicator} />
      ))}
    </div>
  );
};

export default Labels;
