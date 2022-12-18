import { getTableOfContents, addImport, addContent } from './utils.mjs';

const withLayout = () => {
  return (tree, file) => {
    const { layout, ...frontMatter } = file.data['front-matter'];
    const tableOfContents = getTableOfContents(tree);

    // import front-matter specified layout
    addImport(tree, layout, `@/contents-layouts/${layout}`);

    // export layout
    addContent(
      tree,
      `export default ({ children }) => (
        <${layout}
          frontMatter={${JSON.stringify(frontMatter)}}
          tableOfContents={${JSON.stringify(tableOfContents)}}
        >
          {children}
        </${layout}>
       )`
    );
  };
};

export default withLayout;
