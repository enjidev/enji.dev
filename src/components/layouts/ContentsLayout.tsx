import clsx from 'clsx';
import PageHeader from '@/components/shared/PageHeader';

interface PageMeta {
  title: string;
  description: string;
}

interface ContentsLayoutProps {
  meta: PageMeta;
  children: React.ReactNode;
}

const ContentsLayout = ({ meta, children }: ContentsLayoutProps) => {
  return (
    <div className={clsx('')}>
      <PageHeader title={meta.title} desc={meta.description} />
      <div className={clsx('content-wrapper')}>
        <div className={clsx('flex')}>
          <div className={clsx('flex-1 py-8')}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ContentsLayout;
