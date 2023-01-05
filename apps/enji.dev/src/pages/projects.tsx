import ProjectsAnimation from '@/components/animations/Projects';

import ProjectsContents from '@/contents/projects';
import Page from '@/contents-layouts/Page';

function Projects() {
  return (
    <Page
      frontMatter={{
        title: 'Projects',
        description: 'Showcase of my front-end related work.',
      }}
      headerImage={<ProjectsAnimation />}
    >
      <ProjectsContents />
    </Page>
  );
}

export default Projects;
