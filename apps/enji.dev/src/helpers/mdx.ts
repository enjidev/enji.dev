import slug from 'slug';

export const getSlug = (children: React.ReactNode) => {
  if (typeof children === 'string') {
    return slug(children);
  }

  return '';
};

export const urlType = (url: string) => {
  if (['/', '#'].includes(url[0])) {
    return 'internal';
  }

  if (url.indexOf('mailto') === 0) {
    return 'mail';
  }

  return 'external';
};

export const formatLang = (lang: string): string => {
  switch (lang) {
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
      return lang;
  }
};
