/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */

import { visit } from 'unist-util-visit';

const withCodeAttributes = () => (tree: any) => {
  visit(tree, 'element', (node) => {
    if (node.tagName === 'pre') {
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
        const lang =
          node.properties.className[0]?.replace('language-', '') || '';
        if (lang) {
          attributes.language = lang;
        }

        const meta = firstNode.data?.meta || '';
        const metas = meta.match(/[^{}]+(?=})/g) || [];

        // dynamic attributes
        metas.forEach((attr: string) => {
          if (attr.indexOf(':')) {
            const key = attr.split(':')[0];
            const val = attr.split(':')[1];

            attributes[key] = val;
          }
        });

        // apply attributes
        Object.keys(attributes).forEach((key) => {
          node.properties[`data-${key}`] = attributes[key];
        });
      }
    }
  });
};

export default withCodeAttributes;
