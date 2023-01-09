/* eslint-disable no-param-reassign */
import { visit } from 'unist-util-visit';

const withInlineHighlights = () => (tree: any) => {
  visit(tree, 'element', (codeElement, _index, parent) => {
    if (!parent || parent.tagName !== 'pre' || codeElement.tagName !== 'code') {
      return;
    }

    const meta = codeElement.data?.meta || '';
    const metas = meta.match(/[^{}]+(?=})/g) || [];

    metas.forEach((attr: string) => {
      if (attr.indexOf(':')) {
        const [key, val] = attr.split(':');

        if (key.toLowerCase() === 'inlineHighlight'.toLowerCase()) {
          const [keyword, selected = 0, className = undefined] = val.split('|');

          const selectedIdx = (selected && selected.split(',')) || [];

          let idx = 0;
          visit(codeElement, 'text', (textNode, index, parentNode) => {
            if (textNode.value === keyword) {
              idx += 1;

              if (
                selected !== '0' &&
                selectedIdx.length > 0 &&
                selectedIdx.indexOf(idx.toString()) === -1
              )
                return;

              parentNode.children[index!] = {
                type: 'element',
                tagName: 'span',
                properties: {
                  className: ['inline-highlight', className],
                },
                children: [textNode],
              };
            }
          });
        }
      }
    });
  });
};

export default withInlineHighlights;
