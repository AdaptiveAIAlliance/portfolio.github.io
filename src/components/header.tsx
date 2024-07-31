"use client";

import Link from "next/link";
import { config } from "../configs/config.mjs";
import ThemeBrightnessButton from "./theme_brightness_button";
import SvgGridIcon from "./svg_grid_icon";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between min-w-full px-8 py-4 fixed ">
      <p>logo</p>
      <nav className="leading-4 h-16 flex justify-between gap-x-2">
        <ThemeBrightnessButton className="stroke-slate-900 dark:stroke-lime-300" />

        <button
          // onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
          onClick={() => (isOpen == true ? setIsOpen(false) : setIsOpen(true))}
        >
          <SvgGridIcon
            isActive={isOpen}
            className="stroke-slate-900 dark:stroke-lime-300"
          />{" "}
        </button>
        <ul
          className={`flex flex-col gap-y-8 items-center pt-10 text-2xl fixed min-h-screen min-w-full left-0 right-0 top-16 bottom-0 bg-slate-200 dark:bg-slate-950 ${
            isOpen
              ? "opacity-100 z-50 min-h-screen"
              : "opacity-0 -z-50 max-h-0 min-h-0"
          }`}
        >
          {config.mainMeanu.map((menuItem, index) => (
            <li
              className="text-slate-900  hover:border-b-2 hover:text-slate-500 hover:border-slate-500 dark:text-slate-300 dark:hover:text-lime-300 dark:hover:border-lime-300"
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
