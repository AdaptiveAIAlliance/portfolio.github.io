export type postAttributes = {
  title: string;
  featImage: string;
  author: string;
  authorImage: string;
  alt: string;
  intro: string;
  categories: string[];
  date: string;
  tags: string[];
};

export type post = {
  id: string;
  title: string;
  featImage: string;
  author: string;
  authorImage: string;
  alt: string;
  intro: string;
  categories: string[];
  date: string;
  contentHtml: string;
  tags: string[];
};

export type posts = {
  id: string;
  title: string;
  featImage: string;
  author: string;
  authorImage: string;
  alt: string;
  intro: string;
  categories: string[];
  date: string;
  tags: string[];
}[];
export type postSingle = {
  id: string;
  title: string;
  featImage: string;
  author: string;
  authorImage: string;
  alt: string;
  intro: string;
  categories: string[];
  date: string;
  tags: string[];
};
export type frontMatterResult = {
  attributes: postAttributes;
  body: string;
  bodyBegin: number;
  frontmatter: string;
};
export type BasicThree = {
  tag: string;
  children?: BasicThree[] | null;
  name: string;
};
