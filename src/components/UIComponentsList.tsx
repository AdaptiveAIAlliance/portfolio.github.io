import Link from "next/link";

import { buttonVariants } from "./ui/button";
import { Folder, MailOpen } from "lucide-react";
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
    pathIconMap.set("file-three", <Folder color={setIconColor(theme)} />);
    return pathIconMap;
  })();
  return (
    <div className="flex w-full h-full justify-center items-center ">
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
                href={`/ui-components/${p}`}
              >
                {uiPathsIconsMap.has(p) ? uiPathsIconsMap.get(p) : ""}
                {p}
              </Link>
            );
        }
      })}
      {/*
        {paths.map(p: string, i: number) => {
                switch (p) {
                  case "/":
                    return;
                  case "file-three":
                    return (
                      <Link
                        className={` text-lg gap-2 justify-between hover:animate-bounce  ${badgeVariants(
                          {
                            variant: "default",
                          }
                        )} `}
                        key={i}
                        href={`/ui-components/${p}`}
                      >
                        {d.icon}
                        {p}
                      </Link>
                    );
                  default:
                    return (
                      <Link
                        className={` text-lg ${badgeVariants({
                          variant: "default",
                        })} `}
                        key={i}
                        href={`/ui-components/${p}`}
                      >
                        {p}
                      </Link>
                    );
                }
              })} */}
    </div>
  );
}
