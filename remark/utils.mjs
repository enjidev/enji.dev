import fm from 'front-matter';
import slug from 'slug';
import { Parser } from 'acorn';
import acornJsx from 'acorn-jsx';

const ParserWithJSX = Parser.extend(acornJsx());

const parse = (content) => {
  return ParserWithJSX.parse(content, {
    ecmaVersion: 2020,
    sourceType: 'module',
  });
};

export const getFrontMatter = (content) => {
  return fm(content).attributes;
};

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
    let node = tree.children[nodeIndex];

    if (node.type === 'heading' && [2, 3].includes(node.depth)) {
      let depth = node.depth - 1;
      let title = node.children
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
