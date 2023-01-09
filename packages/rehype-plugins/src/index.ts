import rehypePrismPlus from 'rehype-prism-plus';

import withCodeAttributes from './withCodeAttributes';
import withInlineHighlights from './withInlineHighlights';

import type { PluggableList } from 'unified';

const plugins: PluggableList = [
  rehypePrismPlus,
  withInlineHighlights,
  withCodeAttributes,
];

export default plugins;
