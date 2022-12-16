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

    if (type === 'post') {
      addImport(tree, 'MDXPost', '@/components/layouts/MDXPost');
      addContent(
        tree,
        `export default ({ children }) => (
          <MDXPost 
            frontMatter={${JSON.stringify(frontMatter)}}
            tableOfContents={${JSON.stringify(headings)}}
          >
            {children}
          </MDXPost>
        )`
      );
    } else {
      addImport(tree, 'MDXPage', '@/components/layouts/MDXPage');
      addContent(
        tree,
        `export default ({ children }) => (
          <MDXPage 
            frontMatter={${JSON.stringify(frontMatter)}}
            tableOfContents={${JSON.stringify(headings)}}
          >
            {children}
          </MDXPage>
        )`
      );
    }
  };
};

export default withLayout;
