import { EnjiIcon } from '@/components/Icons';

interface LogoProps {
  active?: boolean;
}

const Logo = ({ active = false }: LogoProps) => {
  return (
    <div className="flex items-center gap-1.5 font-extrabold leading-none">
      {active ? (
        <EnjiIcon className="h-6 w-6 text-primary-400 dark:text-primary-200" />
      ) : (
        <EnjiIcon className="h-6 w-6 text-gray-900 dark:text-slate-200" />
      )}
      <div className="-mt-1 hidden text-2xl md:block">
        <span className="text-gray-900 dark:text-slate-200">enji</span>
        <span className="text-primary-400 dark:text-primary-200">dev</span>
      </div>
    </div>
  );
};

export default Logo;
