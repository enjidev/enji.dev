import slug from 'slug';

export const getSlug = (children: React.ReactNode) => {
  if (typeof children === 'string') {
    return slug(children);
  }

  return '';
};
