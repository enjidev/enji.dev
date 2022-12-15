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

export type TGlobalFrontMatter = {
  /**
   * @default page
   */
  type?: 'post' | 'page';
};

export type TPageFrontMatter = TGlobalFrontMatter & {
  title: string;
  description: string;
  caption?: string;
};

export type TPageOgImage = Partial<
  Pick<TPageFrontMatter, 'caption' | 'title' | 'description'>
>;

export type TPostFrontMatter = TGlobalFrontMatter & {
  title: string;
  description: string;
  date: string;
  lang: 'ID' | 'EN';
  tags: Array<string>;
  category: string;
};

export type TPostOgImage = Partial<
  Pick<TPostFrontMatter, 'category' | 'title' | 'date' | 'lang' | 'tags'>
> & {
  aspectRatio?: '16/9' | '4/3' | '1/1';
};
