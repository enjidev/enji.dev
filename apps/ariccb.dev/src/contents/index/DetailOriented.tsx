import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function DetailOriented() {
  return (
    <header className={clsx('mb-2')} data-accent="amber">
      <SectionTitle
        title="Keen Eye for Spotting Small Details."
        caption="Detail Oriented"
        description={[
          'A (healthy) dose of',
          <strong> obsession </strong>,
          'over alignment, balance, user interface consistency, and spotting the areas that need more thought in a UI.',
          <br />,
          <br />,
          ' I have the ability to zero in on the little things that bring an application from',
          <strong> good to great; </strong>,
          "from color palettes to typography, animation speed and 'feel' to spacing and layout.",
        ]}
      />
    </header>
  );
}

export default DetailOriented;
