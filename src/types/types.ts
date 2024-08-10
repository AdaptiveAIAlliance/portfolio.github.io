type postAttributes = {
  title: string;
  featImage: string;
  alt: string;
  intro: string;
  categories: string[];
  date: string;
  tags: string[];
};

type post = {
  id: string;
  title: string;
  featImage: string;
  alt: string;
  intro: string;
  categories: string[];
  date: string;
  contentHtml: string;
  tags: string[];
};

type posts = {
  id: string;
  title: string;
  featImage: string;
  alt: string;
  intro: string;
  categories: string[];
  date: string;
  tags: string[];
}[];
type frontMatterResult = {
  attributes: postAttributes;
  body: string;
  bodyBegin: number;
  frontmatter: string;
};
