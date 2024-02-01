import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  return (
    <>
      <Head
        title="Flumuffel · Hobby Entwickler und Community Owner"
        description="Ein Online-Portfolio mit einer Präsentation meiner Projekte und einigen Gedanken als Hobby Entwickler und Community Owner, der intuitives, klares und modernes liebt."
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
