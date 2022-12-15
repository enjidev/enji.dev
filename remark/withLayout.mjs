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
      addImport(
        tree,
        'PostContentsLayout',
        '@/components/layouts/PostContentsLayout'
      );
      addContent(
        tree,
        `export default ({ children }) => (
          <PostContentsLayout 
            frontMatter={${JSON.stringify(frontMatter)}}
            tableOfContents={${JSON.stringify(headings)}}
          >
            {children}
          </PostContentsLayout>
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
