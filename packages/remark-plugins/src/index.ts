import remarkFrontMatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';

import withFrontMatter from './withFrontMatter';
import withLayout from './withLayout';
import withStrict from './withStrict';

import type { PluggableList } from 'unified';

const plugins: PluggableList = [
  remarkFrontMatter,
  remarkGfm,
  withFrontMatter,
  withStrict,
  withLayout,
];

export default plugins;
