"use client";
import React, { FunctionComponent, useState } from "react";
import { useTheme } from "next-themes";
<<<<<<< HEAD
import SvgGridIcon from "./svgs/SvgGridIcon";
import SvgThemeModeIcon from "./svgs/SvgThemeModeIcon";
=======
import SvgGridIcon from "./svgs/svg_grid_icon";
import SvgThemeModeIcon from "./svgs/svg_theme_mode_icon";
>>>>>>> refs/remotes/origin/main

interface ThemeBrightnessButton {
  className: string;
}
const ThemeBrightnessButton: FunctionComponent<ThemeBrightnessButton> = ({
  className,
}) => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <SvgThemeModeIcon isActive={theme !== "dark"} className={className} />
    </button>
  );
};

export default ThemeBrightnessButton;
