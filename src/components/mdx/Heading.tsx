import clsx from 'clsx';
import slug from 'slug';
import type { MDXComponents } from 'mdx/types';

export const H2: NonNullable<MDXComponents['h1']> = ({ children }) => {
  let id;
  if (typeof children === 'string') {
    id = slug(children);
  }

  return (
    <h2 className={clsx('mb-2 mt-8 scroll-mt-8 text-4xl')} id={id}>
      {children}
    </h2>
  );
};
