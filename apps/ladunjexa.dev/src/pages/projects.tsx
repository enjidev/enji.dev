import ProjectsContents from '@/contents/projects';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';

function Projects() {
  return (
    <Page
      frontMatter={{
        title: 'Projects',
        description: 'Showcase of my cross-platform related work.',
      }}
      headerImage={<HeaderImage />}
    >
      <ProjectsContents
        sectionTitle={{
          title: 'The dynamic accent colors.',
          caption: 'tailwindcss-accent',
          description:
            'Add accent colors for dynamic, flexible color use in your Tailwind CSS project.',
          button: {
            title: 'learn more',
            href: '/docs/tailwindcss-accent',
          },
        }}
        github={{
          author: 'enjidev',
          license: 'MIT',
          repository: 'tailwindcss-accent',
          description:
            'Adds accent colors for more dynamic and flexible color utilization.',
        }}
        npm={{
          packageName: 'tailwindcss-accent',
          description:
            'Adds accent colors for more dynamic and flexible color utilization.',
          isWithTypeScript: true,
        }}
      />

      <ProjectsContents
        sectionTitle={{
          title: 'The dynamic accent colors.',
          caption: 'tailwindcss-accent',
          description:
            'Add accent colors for dynamic, flexible color use in your Tailwind CSS project.',
          button: {
            title: 'learn more',
            href: '/docs/tailwindcss-accent',
          },
        }}
        github={{
          author: 'enjidev',
          license: 'MIT',
          repository: 'tailwindcss-accent',
          description:
            'Adds accent colors for more dynamic and flexible color utilization.',
        }}
        npm={{
          packageName: 'tailwindcss-accent',
          description:
            'Adds accent colors for more dynamic and flexible color utilization.',
          isWithTypeScript: true,
        }}
      />

      <ProjectsContents
        sectionTitle={{
          title: 'The dynamic accent colors.',
          caption: 'tailwindcss-accent',
          description:
            'Add accent colors for dynamic, flexible color use in your Tailwind CSS project.',
          button: {
            title: 'learn more',
            href: '/docs/tailwindcss-accent',
          },
        }}
        github={{
          author: 'enjidev',
          license: 'MIT',
          repository: 'tailwindcss-accent',
          description:
            'Adds accent colors for more dynamic and flexible color utilization.',
        }}
        npm={{
          packageName: 'tailwindcss-accent',
          description:
            'Adds accent colors for more dynamic and flexible color utilization.',
          isWithTypeScript: true,
        }}
      />
    </Page>
  );
}

export default Projects;
