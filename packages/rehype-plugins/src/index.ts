import rehypePrismPlus from 'rehype-prism-plus';

import withCodeAttributes from './withCodeAttributes';

import type { PluggableList } from 'unified';

const plugins: PluggableList = [rehypePrismPlus, withCodeAttributes];

export default plugins;
