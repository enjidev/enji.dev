import ProjectsContents from '@/contents/projects';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';

function Projects() {
  return (
    <Page
      frontMatter={{
        title: '宝藏项目',
        description: '一些项目的展示。',
        caption: 'More',
      }}
      headerImage={<HeaderImage />}
    >
      <ProjectsContents />
    </Page>
  );
}

export default Projects;
