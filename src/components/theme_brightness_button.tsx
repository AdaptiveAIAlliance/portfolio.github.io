"use client";
import React, { FunctionComponent, useState } from "react";
import { useTheme } from "next-themes";
import SvgGridIcon from "./svg_grid_icon";
import SvgThemeModeIcon from "./svg_theme_mode_icon";

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
