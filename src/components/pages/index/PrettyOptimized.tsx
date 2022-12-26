import clsx from 'clsx';

import SectionTitle from '@/components/shared/SectionTitle';

function PrettyOptimized() {
  return (
    <div className={clsx('mb-8')}>
      <SectionTitle
        title="Aesthetically Pleasing, Optimized Code."
        caption="Pretty & Optimized"
        description="Writing clean code is a top priority while keeping it as optimized as possible."
      />
    </div>
  );
}

export default PrettyOptimized;
