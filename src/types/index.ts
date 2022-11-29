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

export type TPostFrontMatter = {
  title: string;
  description: string;
  slug: string;
  date: string;
  pageLang: string;
  pageStatus: string;
};
