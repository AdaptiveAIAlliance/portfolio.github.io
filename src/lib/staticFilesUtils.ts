import fs from "fs";
import path from "path";

const contentDirectory = path.join(
  process.cwd(),
  "src",
  "pages",
  "ui-mini-projects"
);
export async function getUIComponentData() {
  const uiComponentFiles = fs.readdirSync(contentDirectory);

  const uiComponentPaths = uiComponentFiles.map((e) => {
    if (e == "index.tsx") {
      return "/";
    }
    return e;
  });

  return { uiComponentPaths };
}
