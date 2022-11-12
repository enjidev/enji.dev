import HeaderTitle from '@/components/Header/HeaderTitle';
import HeaderCta from '@/components/Header/HeaderCta';
import HeaderImage from '@/components/Header/HeaderImage';
import HeaderTechStack from '@/components/Header/HeaderTechStack';

const Header = () => {
  return (
    <header className="background-grid border-b border-divider-light pt-20 pb-20 dark:border-divider-dark lg:pt-36 lg:pb-28">
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
