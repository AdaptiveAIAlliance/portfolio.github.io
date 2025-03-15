import fs from "fs";
import path from "path";

const contentDirectory = path.join(
  process.cwd(),
  "src",
  "pages",
  "ui-components"
);
export async function getUIComponentData() {
  const uiComponentFolderName = fs.readdirSync(contentDirectory);
  return {
    uiComponentFolderName,
  };
}

// import path from "path";
// import matter from "gray-matter";
// import { remark } from "remark";
// import html from "remark-html";

// export const uiComponentPageName = async (): Promise<string[]> => {
//   const fileNames = fs.readdirSync(contentDirectory);

//   return [];
// };
