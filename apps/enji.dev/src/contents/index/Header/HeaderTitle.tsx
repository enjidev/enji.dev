import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTitle() {
  const controls = useAnimationControls();

  return (
    <div>
      <m.h1
  className={clsx(
    'block text-base text-slate-600 font-mono', 
    'md:text-xl',
    'dark:text-slate-400'
  )}
  initial={animation.hide}
  animate={animation.show}
  transition={{ delay: 0.3 }}
>
  <div className="flex gap-2 items-center">
    {/* Dấu nhắc lệnh sudo cố định */}
    <span className="text-accent-600 dark:text-accent-500 font-bold shrink-0">sudo &gt;</span>
    
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
        cursor: '_',
        delay: 60,
        wrapperClassName: 'text-slate-700 dark:text-slate-300',
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString('systemctl start thaiduy.digital')
          .pauseFor(1000)
          .deleteAll(30)
          .typeString('I am a <strong class="text-accent-600 dark:text-accent-500">Store Manager</strong>')
          .pauseFor(1000)
          .deleteChars(13)
          .typeString('<strong class="text-accent-600 dark:text-accent-500">Operations Expert</strong>')
          .pauseFor(1000)
          .deleteAll(30)
          .typeString('A <strong class="text-accent-600 dark:text-accent-500">Technical Self-Learner</strong>')
          .pauseFor(500)
          .typeString(' who loves servers, VPS, and clean code.')
          .pauseFor(5000)
          .start();
      }}
    />
  </div>
</m.h1>
      </span>
    </div>
  );
}

export default HeaderTitle;
