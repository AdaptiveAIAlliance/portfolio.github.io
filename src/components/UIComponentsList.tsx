import Link from "next/link";

import { buttonVariants } from "./ui/button";
import { Folder, LogIn, MailOpen } from "lucide-react";
import { useTheme } from "next-themes";
const darkColor = "#065f4666";
const lightColor = "#e2eff0";
const setIconColor = (theme?: string) => {
  if (theme === undefined) {
    return lightColor;
  }
  return theme === "dark" ? darkColor : lightColor;
};

export default function UIComponentsList({ paths }: { paths: string[] }) {
  console.log(paths);
  const { theme, setTheme } = useTheme();

  const uiPathsIconsMap = (() => {
    let pathIconMap = new Map<string, any>();
    pathIconMap.set("file-tree", <Folder color={setIconColor(theme)} />);
    pathIconMap.set("signup-form", <LogIn color={setIconColor(theme)} />);
    return pathIconMap;
  })();
  return (
    <div className="flex w-full h-full gap-4 justify-center items-center flex-wrap">
      {paths.map((p: string, i: number) => {
        switch (p) {
          case "/":
            return; // return nothing

          default:
            return (
              <Link
                className={`  ${buttonVariants({
                  variant: "default",
                })} text-lg dark:text-emerald-900 gap-2 justify-between hover:animate-pulse `}
                key={i}
                href={`/ui-mini-projects/${p}`}
              >
                {uiPathsIconsMap.has(p) ? uiPathsIconsMap.get(p) : ""}
                {p}
              </Link>
            );
        }
      })}
    </div>
  );
}
