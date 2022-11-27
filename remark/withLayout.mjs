import {
  getFrontMatter,
  getHeadings,
  addImport,
  addContent,
} from './utils.mjs';

const withLayout = () => {
  return (tree, file) => {
    const data = getFrontMatter(file.value);
    const headings = getHeadings(tree);

    addImport(tree, 'ContentsLayout', '@/components/layouts/ContentsLayout');
    addContent(
      tree,
      `export default ({ children }) => (
        <ContentsLayout meta={${JSON.stringify({
          title: data.title,
          description: data.description,
          tableOfContents: headings,
        })}}>
          {children}
        </ContentsLayout>
      )`
    );
  };
};

export default withLayout;
