import {
  getFrontMatter,
  getHeadings,
  addImport,
  addContent,
} from './utils.mjs';

const withLayout = () => {
  return (tree, file) => {
    const frontMatter = getFrontMatter(file.value);
    const headings = getHeadings(tree);

    // get content type
    const type = frontMatter.type;

    addImport(tree, 'Page', '@/components/layouts/Page');
    addContent(
      tree,
      `export default ({ children }) => (
          <Page
            type={${JSON.stringify(type)}}
            frontMatter={${JSON.stringify(frontMatter)}}
            tableOfContents={${JSON.stringify(headings)}}
          >
            {children}
          </Page>
        )`
    );
  };
};

export default withLayout;
