import remarkFrontMatter from 'remark-frontmatter';

import withFrontMatter from './withFrontMatter';
import withLayout from './withLayout';
import withStrict from './withStrict';

import type { PluggableList } from 'unified';

const plugins: PluggableList = [
  remarkFrontMatter,
  withFrontMatter,
  withStrict,
  withLayout,
];

export default plugins;
