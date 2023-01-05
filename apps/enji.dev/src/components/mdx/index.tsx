import { H2, H3 } from '@/components/mdx/Heading';
import { Link } from '@/components/mdx/Link';
import { Pre } from '@/components/mdx/Pre';
import { Table } from '@/components/mdx/Table';

import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  a: Link,
  h2: H2,
  h3: H3,
  pre: Pre,
  table: Table,
};

export default components;
