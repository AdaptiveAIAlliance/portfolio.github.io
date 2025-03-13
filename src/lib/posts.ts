import fs from "fs";
import path from "path";
import matter from "gray-matter";
import utils from "util";
import { remark } from "remark";
import html from "remark-html";
import { readdir, readFile } from "fs/promises";
import fm from "front-matter";
const postsDirectory = path.join(process.cwd(), "content", "posts");

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = await readdir(postsDirectory);

  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await readFile(fullPath, "utf8");
      const matterResult = fm(fileContents) as frontMatterResult;
      console.log(matterResult);

      // Use gray-matter to parse the post metadata section
      // const matterResult = matter(fileContents);
      // const matterResult = matter.read(fullPath);

      // Combine the data with the id
      return {
        id,
        title: matterResult.attributes.title,
        featImage: matterResult.attributes.featImage,
        alt: matterResult.attributes.alt,
        intro: matterResult.attributes.intro,
        categories: matterResult.attributes.categories,
        tags: matterResult.attributes.tags,
        date: matterResult.attributes.date,
        author: matterResult.attributes.author,
        authorImage: matterResult.attributes.authorImage,
      };
    })
  );
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getCategories(): Promise<string[]> {
  const posts = await getSortedPostsData();
  const categories: Set<string> = new Set();
  posts
    .map((p) => p.categories)
    .flat()
    .forEach((c) => {
      if (!categories.has(c)) {
        categories.add(c);
      }
    });
  return [...categories];
}
export async function getTags(): Promise<string[]> {
  const posts = await getSortedPostsData();
  const tags: Set<string> = new Set();
  posts
    .map((p) => p.tags)
    .flat()
    .forEach((c) => {
      if (!tags.has(c)) {
        tags.add(c);
      }
    });
  return [...tags];
}
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  const fileContents = await readFile(fullPath, "utf8");

  // const matterResult = matter(fileContents);
  const matterResult = fm(fileContents) as frontMatterResult;

  const processedContent = await remark().use(html).process(matterResult.body);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.attributes.title,
    intro: matterResult.attributes.intro,
    featImage: matterResult.attributes.featImage,
    alt: matterResult.attributes.alt,
    categories: matterResult.attributes.categories,
    tags: matterResult.attributes.tags,
    date: matterResult.attributes.date,
    author: matterResult.attributes.author,
    authorImage: matterResult.attributes.authorImage,
  };
}
