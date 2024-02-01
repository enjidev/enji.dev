import ProjectsContents from '@/contents/projekte';
import HeaderImage from '@/contents/projekte/HeaderImage';
import Page from '@/contents-layouts/Page';

function Projects() {
  return (
    <Page
      frontMatter={{
        title: 'Projekte',
        description: 'Hier findest du eine Übersicht über meine Projekte.',
      }}
      headerImage={<HeaderImage />}
    >
      <ProjectsContents />
    </Page>
  );
}

export default Projects;
