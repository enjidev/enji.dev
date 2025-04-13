import LinksContents from '@/contents/links';
import Page from '@/contents-layouts/Page';

function Links() {
  return (
    <Page
      frontMatter={{
        title: '友情链接',
        description: '与各位博主共同进步。',
        caption: 'More',
      }}
    >
      <LinksContents />
    </Page>
  );
}

export default Links;
