import clsx from 'clsx';

import Contents from '@/contents/HHI/Contents.mdx';

function TILContents() {
  return (
    <div className={clsx('content-wrapper mdx-contents')}>
      <Contents />
    </div>
  );
}

export default TILContents;
