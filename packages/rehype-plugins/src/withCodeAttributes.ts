/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
const withCodeAttributes = () => (tree, file) => {
  for (let nodeIndex = 0; nodeIndex < tree.children.length; nodeIndex++) {
    const node = tree.children[nodeIndex];

    if (node.type === 'element' && node.tagName === 'pre') {
      const attributes: {
        [key: string]: string;
      } = {};

      const firstNode = node.children[0];

      if (firstNode && firstNode.tagName === 'code') {
        // lines attribute
        const linesCount = firstNode.children.length;
        if (linesCount) {
          attributes.lines = linesCount;
        }

        // language attribute
        const lang = node.properties.className[0]?.split('language-') || '';
        if (lang) {
          attributes.language = lang;
        }

        const meta = firstNode.data?.meta || '';
        const metas = meta.match(/[^{}]+(?=})/g) || [];

        // dynamic attributes
        for (let attrIndex = 0; attrIndex < metas.length; attrIndex++) {
          const attr = metas[attrIndex];

          if (attr.indexOf(':')) {
            const key = attr.split(':')[0];
            const val = attr.split(':')[1];

            attributes[key] = val;
          }
        }

        // apply attributes
        Object.keys(attributes).forEach((key) => {
          node.properties[`data-${key}`] = attributes[key];
        });
      }
    }
  }
};

export default withCodeAttributes;
