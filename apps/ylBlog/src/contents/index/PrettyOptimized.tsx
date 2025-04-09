import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function PrettyOptimized() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="易于理解和优化的代码。"
        caption="美观优化"
        description="编写干净的代码是首要任务，同时尽可能保持其优化。"
      />
    </header>
  );
}

export default PrettyOptimized;
