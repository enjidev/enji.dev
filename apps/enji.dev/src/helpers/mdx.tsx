import slug from 'slug';

import {
  CssIcon,
  FileIcon,
  HtmlIcon,
  JavaScriptIcon,
  ReactIcon,
  TypeScriptIcon,
} from '@/components/shared/IconsFile';

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

export const formatLang = (
  lang: string
): {
  language: string;
  icon: React.ReactElement;
} => {
  switch (lang) {
    case 'js':
    case 'javascript':
      return {
        language: 'JavaScript',
        icon: <JavaScriptIcon />,
      };
    case 'ts':
    case 'typescript':
      return {
        language: 'TypeScript',
        icon: <TypeScriptIcon />,
      };
    case 'jsx':
      return {
        language: 'JavaScript React',
        icon: <ReactIcon />,
      };
    case 'tsx':
      return {
        language: 'TypeScript React',
        icon: <ReactIcon />,
      };
    case 'html':
      return {
        language: 'HTML',
        icon: <HtmlIcon />,
      };
    case 'css':
      return {
        language: 'CSS',
        icon: <CssIcon />,
      };
    case 'bash':
    case 'cmd':
      return {
        language: 'Terminal',
        icon: <FileIcon />,
      };
    default:
      return {
        language: 'Plain Text',
        icon: <FileIcon />,
      };
  }
};
