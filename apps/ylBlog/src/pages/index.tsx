import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  return (
    <>
      <Head
        title="Yulo的个人博客"
        description="Yulo的个人博客，记录日常学习与开发中的点滴收获。分享编程实践、学习笔记和个人感悟，希望与同行共同进步，一起探索技术世界。"
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
