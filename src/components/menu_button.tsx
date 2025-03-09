"use client";
import React, { FunctionComponent, useState } from "react";
import SvgGridIcon from "./svgs/svg_grid_icon";

interface MenuButton {
  className: string;
}
const MenuButton: FunctionComponent<MenuButton> = ({ className }) => {
  let [isActive, setIsActive] = useState(true);
  return (
    <button
      // onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      onClick={() =>
        isActive == true ? setIsActive(false) : setIsActive(true)
      }
      className="bg-gray-800 dark:bg-gray-50 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg "
    >
      <SvgGridIcon className={className} isActive={isActive} />
    </button>
  );
};

export default MenuButton;
