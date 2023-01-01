/* eslint-disable no-plusplus */

import { Parser } from 'acorn';
import acornJsx from 'acorn-jsx';
import fm from 'front-matter';
import slug from 'slug';

const ParserWithJSX = Parser.extend(acornJsx());

const parse = (content) =>
  ParserWithJSX.parse(content, {
    ecmaVersion: 2020,
    sourceType: 'module',
  });

export const getFrontMatter = (content) => fm(content).attributes;

export const addImport = (tree, name, location) => {
  tree.children.unshift({
    type: 'mdxjsEsm',
    data: {
      estree: parse(`import ${name} from '${location}'`),
    },
  });
};

export const addContent = (tree, content) => {
  tree.children.push({
    type: 'mdxjsEsm',
    data: {
      estree: parse(content),
    },
  });
};

export const getTableOfContents = (tree) => {
  const contents = [];

  for (let nodeIndex = 0; nodeIndex < tree.children.length; nodeIndex++) {
    const node = tree.children[nodeIndex];

    if (node.type === 'heading' && [2, 3].includes(node.depth)) {
      const depth = node.depth - 1;
      const title = node.children
        .filter((n) => n.type === 'text')
        .map((n) => n.value)
        .join('');

      contents.push({
        title,
        slug: slug(title),
        depth,
      });
    }
  }

  return contents;
};
