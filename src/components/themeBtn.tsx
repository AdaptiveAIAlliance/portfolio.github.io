"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

import SvgThemeModeIcon from "./svgs/svg_theme_mode_icon";
export default function ThemeBtn() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme !== "undefined") {
      theme !== "dark" ? setTheme("light") : setTheme("dark");
    }
  }, []);
  return (
    <button
      onClick={() => {
        return theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      <SvgThemeModeIcon
        isActive={theme !== "dark"}
        className="stroke-slate-200 dark:stroke-lime-300"
      />
    </button>
  );
}
