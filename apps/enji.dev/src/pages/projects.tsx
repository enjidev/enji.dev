import Code from '@/components/animations/Code';

import ProjectsContents from '@/contents/projects';
import Page from '@/contents-layouts/Page';

function Projects() {
  return (
    <Page
      frontMatter={{
        title: 'Projects',
        description: 'Showcase of my Front-End related work.',
      }}
      headerImage={<Code />}
    >
      <ProjectsContents />
    </Page>
  );
}

export default Projects;
