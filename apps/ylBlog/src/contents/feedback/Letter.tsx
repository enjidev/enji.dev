import clsx from 'clsx';
import Image from 'next/image';

export default function Letter() {
  return (
    <div className={clsx('mx-auto', 'md:w-[32.5rem]')}>
      <div
        className={clsx(
          'transition-all delay-300 duration-1000 ease-in-out',
          'md:relative md:top-0 md:h-[28rem] md:overflow-hidden md:hover:-top-20 md:hover:h-[65rem]'
        )}
      >
        <Image
          className={clsx(
            'pointer-events-none absolute bottom-[7.75rem] hidden brightness-75',
            'md:block'
          )}
          src="/assets/images/cdn/letterOpen.png"
          width={530}
          height={317}
          alt=""
        />
        {/* 信件主要内容 */}
        <div
          className={clsx(
            'relative mx-auto overflow-visible transition-all delay-300 duration-1000 ease-in-out',
            'md:w-[30rem] md:pt-[12.5rem]'
          )}
        >
          <div
            className={clsx(
              'pointer-events-none rounded-sm bg-white pb-5',
              'md:shadow-lg md:shadow-black dark:bg-[#323232]'
            )}
          >
            <Image
              className="w-full rounded-sm"
              src="/assets/images/cdn/violet.jpg"
              width={473}
              height={291}
              alt=""
            />
            <div className="mt-5">
              <p className="text-center text-lg font-bold leading-9">
                来自 Yulo Han 的留言：
              </p>
              <div
                className={clsx(
                  'mt-5 rounded-sm border border-[#ddd] bg-[#eeeeee] p-5 text-center',
                  'dark:bg-[#5a5a5a]'
                )}
              >
                <div className="leading-8">有什么想问的?</div>
                <div className="leading-8">有什么想说的?</div>
                <div className="leading-8">有什么想吐槽的?</div>
                <div className="leading-8">
                  哪怕是有什么想吃的，都可以告诉我哦~
                </div>
              </div>
              <Image
                className="mt-10 w-full"
                src="/assets/images/cdn/b2233.png"
                width={473}
                height={24}
                alt="2233"
              />
              <p className="mt-2 text-center text-xs leading-6 text-[#999999]">
                自动书记人偶竭诚为您服务!
              </p>
            </div>
          </div>
        </div>
        <Image
          className={clsx(
            'pointer-events-none absolute -bottom-0.5 z-50 hidden brightness-75',
            'md:block'
          )}
          src="/assets/images/cdn/letterBody.png"
          width={530}
          height={259}
          alt=""
        />
      </div>
    </div>
  );
}
