import ProjectsContents from '@/contents/projects';
import Page from '@/contents-layouts/Page';

function Projects() {
  return (
    <Page
      frontMatter={{
        title: '宝藏项目',
        description: '一些项目的展示。',
        caption: 'More',
      }}
    >
      <ProjectsContents />
    </Page>
  );
}

export default Projects;
