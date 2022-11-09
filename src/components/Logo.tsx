const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="inline-flex h-6 w-6 items-center justify-center rounded-lg border-2 border-slate-900 text-xs text-gray-900 dark:border-slate-200 dark:text-slate-200">
        /
      </div>
      <div className="-mt-1 hidden md:block">
        <span className="text-gray-900 dark:text-slate-200">enji</span>
        <span className="text-primary-400">dev</span>
      </div>
    </div>
  );
};

export default Logo;
