"use client";

import Link from "next/link";
import { config } from "../configs/config.mjs";
import ThemeBrightnessButton from "./theme_brightness_button";
import SvgGridIcon from "./svg_grid_icon";
import { useState } from "react";
import Image from "next/image";
import { assetPathResolver } from "@/utils/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between min-w-full  px-8 py-4 fixed bg-opacity-20 dark:bg-opacity-20 bg-slate-400 dark:bg-emerald-700 border border-gray-300 border-opacity-20 dark:border-gray-900 z-10">
      <Image
        className="w-12 "
        src={assetPathResolver("/logo.png")}
        width={128}
        height={128}
        alt="wbsite log"
      />
      <nav
        className={`leading-4 h-14 flex justify-between gap-x-2 after:filter after:blur-lg after:left-0 after:right-0 after:top-0  after:fixed after:bg-clip-padding after:backdrop-filter after:backdrop-blur-xl after:-z-50 after:duration-300 ${
          isOpen ? "after:h-screen " : "after:h-24 after:pb-4"
        }`}
      >
        <ThemeBrightnessButton className="stroke-slate-200 dark:stroke-lime-300" />

        <button
          // onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
          onClick={() => (isOpen == true ? setIsOpen(false) : setIsOpen(true))}
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
              className="text-slate-100 hover:no-underline hover:text-slate-400  dark:text-slate-300 dark:hover:text-lime-300  hover-drop-shadow"
              key={index}
            >
              <Link href={`#${menuItem}`}>{menuItem}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
