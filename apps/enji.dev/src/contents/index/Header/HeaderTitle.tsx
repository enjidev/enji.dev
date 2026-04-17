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
      {/* Phần Hi và Emoji */}
      <m.div
        className={clsx(
          'mb-1 flex items-center gap-1 text-2xl text-slate-600',
          'md:mb-0 md:gap-2 md:text-4xl',
          'dark:text-slate-400'
        )}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        hi!
        <m.div
          initial={{
            opacity: 0,
            y: 16,
            rotate: 30,
            transformOrigin: 'right center',
          }}
          animate={controls}
          transition={{
            type: 'spring',
            delay: 0.35,
            bounce: 0.7,
            duration: 0.7,
          }}
        >
          <Image
            className={clsx('w-7 md:w-10')}
            alt="Love-you Gesture"
            src="/assets/emojis/love-you-gesture.png"
            width={48}
            height={48}
            onLoadingComplete={() => {
              controls.start({
                opacity: 1,
                y: 0,
                rotate: 0,
              });
            }}
            priority
          />
        </m.div>
      </m.div>

      {/* Phần Tên và Nội dung gõ chữ */}
      <span className={clsx('text-slate-700', 'dark:text-slate-300')}>
        <m.span
          className={clsx(
            'mb-4 block text-[2.5rem] font-[1000] leading-none',
            'md:mb-6 md:text-7xl'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          I&apos;m{' '}
          <strong className={clsx('text-accent-600', 'dark:text-accent-500')}>
            Duy
          </strong>{' '}
          Thái,{' '}
        </m.span>

        <m.h1
          className={clsx(
            'block text-base text-slate-600 font-mono leading-relaxed', 
            'md:text-xl',
            'dark:text-slate-400'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          <div className="flex gap-2 items-start">
            <span className="text-accent-600 dark:text-accent-500 font-bold shrink-0 mt-1">sudo &gt;</span>
            
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                cursor: '_',
                delay: 60,
                wrapperClassName: 'text-slate-700 dark:text-slate-300 block',
              }}
              onInit={(typewriter) => {
                typewriter
                  // Khởi động
                  .typeString('systemctl start thaiduy.digital')
                  .pauseFor(1000)
                  .deleteAll(30)
                  
                  // Chuyên môn Manager & Operations
                  .typeString('I am a <strong class="text-accent-600 dark:text-accent-500">Store Manager</strong>')
                  .pauseFor(1000)
                  .deleteChars(13)
                  .typeString('<strong class="text-accent-600 dark:text-accent-500">Operations Expert</strong>')
                  .pauseFor(1000)
                  .deleteAll(30)

                  // Đam mê Self-Learner & Server (Đã xuống dòng để tránh tràn hình)
                  .typeString('A <strong class="text-accent-600 dark:text-accent-500">Technical Self-Learner</strong>')
                  .typeString('<br />')
                  .typeString('who loves servers, VPS, and clean code.')
                  .pauseFor(2000)
                  .deleteAll(30)

                  // Khoe thêm chất nghệ sĩ (Photographer & Designer)
                  .typeString('also a <strong class="text-accent-600 dark:text-accent-500">Photographer</strong>')
                  .pauseFor(500)
                  .typeString(' & <br />Graphic Designer by heart.')
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