import clsx from 'clsx';
import HeaderTitle from '@/components/Header/HeaderTitle';
import HeaderCta from '@/components/Header/HeaderCta';
import HeaderImage from '@/components/Header/HeaderImage';
import HeaderTechStack from '@/components/Header/HeaderTechStack';

const Header = () => {
  return (
    <header
      className={clsx(
        'background-grid border-b border-divider-light pt-20 pb-20',
        'lg:pb-28 lg:pt-36',
        'dark:border-divider-dark'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('relative')}>
          <div className={clsx('relative z-10')}>
            <HeaderTitle />
          </div>
          <div className={clsx('mt-4 md:mt-8')}>
            <HeaderCta />
          </div>
          <div className={clsx('mt-20 lg:mt-36')}>
            <HeaderTechStack />
          </div>
          <div
            className={clsx(
              'pointer-events-none absolute -top-36 right-0 z-0 hidden select-none',
              'lg:block'
            )}
          >
            <HeaderImage />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
