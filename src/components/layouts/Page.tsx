import Head from '@/components/meta/Head';
import CenteredHeader from '@/components/shared/Header/CenteredHeader';

import { getPageOgImageUrl } from '@/helpers/page';

interface PageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function Page({ title, description, children }: PageProps) {
  const ogImage = getPageOgImageUrl({
    title,
    description,
  });

  return (
    <>
      <Head title={title} description={description} ogImage={ogImage} />
      <CenteredHeader title={title} description={description} />
      {children}
    </>
  );
}

export default Page;
