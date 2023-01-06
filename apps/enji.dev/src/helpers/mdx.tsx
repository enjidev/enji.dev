import slug from 'slug';

import {
  CssIcon,
  FileIcon,
  HtmlIcon,
  JavaScriptIcon,
  ReactIcon,
  TailwindIcon,
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
  lang: string,
  filename?: string
): {
  language: string;
  icon: React.ReactElement;
} => {
  let language = lang;
  let icon = <FileIcon />;

  switch (lang) {
    case 'js':
    case 'javascript':
      language = 'JavaScript';
      icon = <JavaScriptIcon />;
      break;
    case 'ts':
    case 'typescript':
      language = 'TypeScript';
      icon = <TypeScriptIcon />;
      break;
    case 'jsx':
      language = 'JavaScript React';
      icon = <ReactIcon />;
      break;
    case 'tsx':
      language = 'TypeScript React';
      icon = <ReactIcon />;
      break;
    case 'html':
      language = 'HTML';
      icon = <HtmlIcon />;
      break;
    case 'css':
      language = 'CSS';
      icon = <CssIcon />;
      break;
    case 'bash':
    case 'cmd':
      language = 'Terminal';
      break;
    default:
      language = 'Plain Text';
      break;
  }

  switch (filename) {
    case 'tailwind.config.js':
      icon = <TailwindIcon />;
      break;
    default:
      break;
  }

  return { language, icon };
};
