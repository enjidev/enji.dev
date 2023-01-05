import slug from 'slug';

export const getSlug = (children: React.ReactNode) => {
  if (typeof children === 'string') {
    return slug(children);
  }

  return '';
};

export const getLangFromClassName = (
  className?: string
): string | undefined => {
  if (!className) return undefined;

  const classes = className.split(' ');
  const language = classes
    ?.filter((c) => c.includes('language-'))[0]
    ?.replace('language-', '');

  if (!language) return undefined;

  switch (language) {
    case 'js':
    case 'javascript':
      return 'JavaScript';
    case 'ts':
    case 'typescript':
      return 'TypeScript';
    case 'html':
      return 'HTML';
    case 'css':
      return 'CSS';
    case 'bash':
    case 'cmd':
      return 'Terminal';
    default:
      return language;
  }
};
