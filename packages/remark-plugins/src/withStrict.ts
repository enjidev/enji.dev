/* eslint-disable no-plusplus */

const withStrict = () => (tree) => {
  for (let nodeIndex = 0; nodeIndex < tree.children.length; nodeIndex++) {
    const node = tree.children[nodeIndex];

    if (
      (node.type === 'heading' && ![2, 3].includes(node.depth)) ||
      (node.type === 'mdxJsxFlowElement' &&
        ['h1', 'h4', 'h5', 'h6'].includes(node.name))
    ) {
      throw new Error('Headings depths other than 2 or 3 are not allowed.');
    }
  }
};

export default withStrict;
