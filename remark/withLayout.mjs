import { getHeadings, addImport, addContent } from './utils.mjs';

const withLayout = () => {
  return (tree, file) => {
    const { layout, ...frontMatter } = file.data['front-matter'];
    const headings = getHeadings(tree);

    // import front-matter specified layout
    addImport(tree, layout, `@/components/layouts/${layout}`);

    // export layout
    addContent(
      tree,
      `export default ({ children }) => (
        <${layout}
          frontMatter={${JSON.stringify(frontMatter)}}
          tableOfContents={${JSON.stringify(headings)}}
        >
          {children}
        </${layout}>
       )`
    );
  };
};

export default withLayout;
