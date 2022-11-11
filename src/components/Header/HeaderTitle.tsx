import Image from 'next/image';

const HeaderTitle = () => {
  return (
    <div>
      <div className="flex items-center gap-2 text-2xl text-slate-500 dark:text-slate-500 md:text-4xl">
        hi!
        <Image
          className="w-7 md:w-10"
          alt="Love-you Gesture"
          src="/assets/emojis/love-you-gesture.png"
          width={48}
          height={48}
          priority
        />
      </div>
      <h1 className="text-slate-600 dark:text-slate-400">
        <span className="mb-2 block text-4xl font-bold md:mb-4 md:text-7xl">
          i&apos;m{' '}
          <strong className="font-extrabold text-slate-900 dark:text-slate-50">
            énji
          </strong>{' '}
          kusnadi,
        </span>
        <span className="block  text-lg md:text-2xl">
          a <strong className="font-bold">creative developer</strong>.
        </span>
      </h1>
    </div>
  );
};

export default HeaderTitle;
