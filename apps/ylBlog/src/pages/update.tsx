import UpdateContents from '@/contents/update';
import Page from '@/contents-layouts/Page';

function Update() {
  return (
    <Page
      frontMatter={{
        title: '网站站更新日志',
        description: '此页面是更新日志，记录了此博客网站的生命历程。',
      }}
    >
      <UpdateContents />
    </Page>
  );
}

export default Update;
