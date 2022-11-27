import {
  getFrontMatter,
  getHeadings,
  addImport,
  addExportDefault,
} from './utils.mjs';

const withLayout = () => {
  return (tree, file) => {
    const data = getFrontMatter(file.value);
    const headings = getHeadings(tree);

    addImport(tree, 'ContentsLayout', '@/components/layouts/ContentsLayout');
    addExportDefault(
      tree,
      `({ children }) => (
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
