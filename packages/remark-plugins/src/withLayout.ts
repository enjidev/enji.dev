import { addContent, addImport, getTableOfContents } from './utils';

const withLayout = () => (tree, file) => {
  const data = file.data['front-matter'] || {};

  // skip adding layout
  if (Object.keys(data).length === 0) return;

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

export default withLayout;
