import clsx from 'clsx';
import { useState } from 'react';

function AccentDemo() {
  const [accent, setAccent] = useState<'violet' | 'blue'>('violet');

  const handleClick = () => {
    const newAccent = accent === 'violet' ? 'blue' : 'violet';

    document.documentElement.setAttribute('data-accent', newAccent);
    setAccent(newAccent);
  };

  return (
    <div className={clsx('my-12 flex items-center justify-center')}>
      <button
        type="button"
        className={clsx('button button--solid')}
        onClick={handleClick}
      >
        Change the Accent Color!
      </button>
    </div>
  );
}

export default AccentDemo;
