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

    addImport(tree, 'ContentsLayout', '@/components/layouts/ContentsLayout');
    addContent(
      tree,
      `export default ({ children }) => (
        <ContentsLayout 
          frontMatter={${JSON.stringify(frontMatter)}}
          tableOfContents={${JSON.stringify(headings)}}
        >
          {children}
        </ContentsLayout>
      )`
    );
  };
};

export default withLayout;
