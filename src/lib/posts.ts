import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

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

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title,
      featImage: matterResult.data.featImage,
      alt: matterResult.data.alt,
      intro: matterResult.data.intro,
      categories: matterResult.data.categories,
      tags: matterResult.data.tags,
      date: matterResult.data.date,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getCategories(): string[] {
  const posts = getSortedPostsData();
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
export function getTags(): string[] {
  const posts = getSortedPostsData();
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

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    intro: matterResult.data.intro,
    featImage: matterResult.data.featImage,
    alt: matterResult.data.alt,
    categories: matterResult.data.categories,
    tags: matterResult.data.tags,
    date: matterResult.data.date,
  };
}
