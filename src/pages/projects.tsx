import Page from '@/components/layouts/Page';

import ProjectsContents from '@/contents/projects';

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
