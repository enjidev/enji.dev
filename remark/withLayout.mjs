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

    const pageType = frontMatter.type;

    if (pageType === 'post') {
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
    } else {
      addImport(
        tree,
        'PageContentsLayout',
        '@/components/layouts/PageContentsLayout'
      );
      addContent(
        tree,
        `export default ({ children }) => (
          <PageContentsLayout 
            frontMatter={${JSON.stringify(frontMatter)}}
            tableOfContents={${JSON.stringify(headings)}}
          >
            {children}
          </PageContentsLayout>
        )`
      );
    }
  };
};

export default withLayout;
