import clsx from 'clsx';

import TwikooComments from '@/components/TwikooComments';

import Letter from './Letter';

function MessagesContents() {
  return (
    <div className={clsx('content-wrapper')}>
      <Letter />
      <TwikooComments />
    </div>
  );
}

export default MessagesContents;
