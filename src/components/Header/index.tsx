import HeaderTitle from '@/components/Header/HeaderTitle';
import HeaderCta from '@/components/Header/HeaderCta';
import HeaderImage from '@/components/Header/HeaderImage';
import HeaderTechStack from '@/components/Header/HeaderTechStack';

const Header = () => {
  return (
    <header className="relative z-0 border-b border-b-slate-100 bg-slate-100 pt-20 pb-20 dark:border-divider-dark dark:bg-[#05011E] lg:pt-36 lg:pb-28">
      <div
        className="absolute inset-0 z-[-1] bg-slate-50 bg-grid-slate-200/60 dark:bg-slate-900 dark:bg-grid-slate-50/[0.04] lg:bg-grid-big-slate-200/50 lg:dark:bg-grid-big-slate-50/[.02]"
        style={{
          maskImage:
            'radial-gradient(ellipse at 160% center, black 40%, transparent)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 160% center, black 40%, transparent)',
        }}
      ></div>
      <div className="content-wrapper">
        <div className="relative">
          <div className="relative z-10">
            <HeaderTitle />
          </div>
          <div className="mt-4 md:mt-8">
            <HeaderCta />
          </div>
          <div className="mt-20 lg:mt-36">
            <HeaderTechStack />
          </div>
          <div className="pointer-events-none absolute -top-36 right-0 z-0 hidden select-none lg:block">
            <HeaderImage />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
