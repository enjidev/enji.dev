export type TApiError = {
  error: string;
};

export type TLastUpdate = {
  commiter: string;
  message: string;
  avatar: string;
  date: string;
  url: string;
};

export type TTableOfContentsItem = {
  title: string;
  depth: number;
  slug: string;
};

export type TTableOfContents = Array<TTableOfContentsItem>;

export type TPageFrontMatter = {
  title: string;
  description: string;
  caption: string;
};

export type TPostFrontMatter = {
  title: string;
  description: string;
  date: string;
  lang: 'ID' | 'EN';
};
