"use client";

import Link from "next/link";
import { config } from "../configs/config.mjs";
import SvgGridIcon from "./svgs/SvgGridIcon";
import { useEffect, useState } from "react";
import Image from "next/image";
import { assetPathResolver } from "@/utils/utils";
import { useTheme } from "next-themes";
import SvgThemeModeIcon from "./svgs/SvgThemeModeIcon";
import AnimatedCursor from "react-animated-cursor";
import SvgLogo from "./svgs/SvgLogo";
export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (theme !== "undefined") {
      theme !== "dark" ? setTheme("light") : setTheme("dark");
    }
  }, []);

  return (
    <>
      <header className="flex justify-between items-center min-w-full  px-8 py-4 fixed bg-opacity-20 dark:bg-opacity-20 bg-slate-400 dark:bg-emerald-700 border border-gray-300 border-opacity-20 dark:border-gray-900 z-10">
        <Link href={`/`}>
          <SvgLogo
            width="32"
            height="32"
            className=" stroke-slate-200 fill-slate-200 dark:stroke-lime-300 dark:fill-lime-300"
          />
        </Link>
        <nav
          className={`leading-4 h-14 flex justify-between gap-x-2 after:filter after:blur-lg after:left-0 after:right-0 after:top-0  after:fixed after:bg-clip-padding after:backdrop-filter after:backdrop-blur-xl after:-z-50 after:duration-300 ${
            isOpen ? "after:h-screen " : "after:h-24 after:pb-4"
          }`}
        >
          <button
            onClick={() => {
              console.log("tsetet", theme);
              theme === "dark" ? setTheme("light") : setTheme("dark");
              // return theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
          >
            <SvgThemeModeIcon
              isActive={theme !== "dark"}
              className="stroke-slate-200 dark:stroke-lime-300"
            />
          </button>
          <button
            //
            onClick={() =>
              isOpen === true ? setIsOpen(false) : setIsOpen(true)
            }
          >
            <SvgGridIcon
              isActive={isOpen}
              className="stroke-slate-200 dark:stroke-lime-300"
            />{" "}
          </button>
          <ul
            className={`flex flex-col gap-y-8 items-center pt-10 mt-2 text-2xl fixed min-h-screen min-w-full left-0 right-0 top-20 bottom-0 bg-opacity-20 dark:bg-opacity-20 bg-slate-400 dark:bg-emerald-700 border border-gray-300 border-opacity-20 dark:border-gray-900 ease-in-out duration-700 ${
              isOpen
                ? "opacity-100 z-50 min-h-screen "
                : "opacity-0 -z-50 translate-y-full"
            }`}
          >
            {config.mainMeanu.map((menuItem, index) => (
              <li
                className="text-neural-950 hover:no-underline hover:text-slate-300  dark:text-slate-300 dark:hover:text-lime-300  hover-drop-shadow duration-300"
                key={index}
              >
                <Link href={`${menuItem.slug}`}>{menuItem.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          // border: "3px solid var(--cursor-color)",
          backgroundColor: "var(--cursor-color)",

          mixBlendMode: "exclusion",
          // zIndex: "99",
        }}
      />
    </>
  );
}
