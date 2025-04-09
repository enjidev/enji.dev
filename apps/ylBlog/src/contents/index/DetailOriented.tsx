import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function DetailOriented() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="善于发现细微细节的敏锐眼光。"
        caption="注重细节"
        description="意识到访问的便利性、用户界面的一致性以及用户体验的改善。"
      />
    </header>
  );
}

export default DetailOriented;
