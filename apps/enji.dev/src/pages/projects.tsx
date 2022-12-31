import ProjectsContents from '@/contents/projects';
import Page from '@/contents-layouts/Page';

function Projects() {
  return (
    <Page
      frontMatter={{
        title: 'Projects',
        description: 'Showcase of my Front-End related work.',
      }}
    >
      <ProjectsContents />
    </Page>
  );
}

export default Projects;
