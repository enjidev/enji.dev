import TILContents from '@/contents/HHI';
import HeaderImage from '@/contents/HHI/HeaderImage';
import Page from '@/contents-layouts/Page';

function TIL() {
  return (
    <Page
      frontMatter={{
        title: 'Heute habe ich...',
        description: `Kurze Posts zu Themen die ich am Tag gemacht habe.`,
      }}
      headerImage={<HeaderImage />}
    >
      <TILContents />
    </Page>
  );
}

export default TIL;
