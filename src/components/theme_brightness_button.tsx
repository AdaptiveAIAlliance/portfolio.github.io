"use client";
import React, { FunctionComponent, useState } from "react";
import { useTheme } from "next-themes";
import SvgGridIcon from "./svgs/svg_grid_icon";
import SvgThemeModeIcon from "./svgs/svg_theme_mode_icon";

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
