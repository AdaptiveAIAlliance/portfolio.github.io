"use client";
import React, { FunctionComponent } from "react";
import svgStyles from "./SvgThemeModeIcon.module.scss";

interface SvgThemeModeIcon {
  isActive: boolean;
  className: string;
}
const SvgThemeModeIcon: FunctionComponent<SvgThemeModeIcon> = ({
  isActive,
  className,
}) => {
  return (
    <svg
      className={`${svgStyles.svgThemeModeIcon} ${className} ${
        isActive ? " " + svgStyles.active : ""
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 17"
      width="17"
      height="17"
      // class="icons-style mini-icons"
    >
      <title>Theme</title>
      <path
        d="M14.994,7.99a7,7,0,0,1-12.813,3.9,1,1,0,0,1,1.063-1.532,6.139,6.139,0,0,0,1.961.089,6.012,6.012,0,0,0,5.212-4.985,6.067,6.067,0,0,0-.065-2.274A1,1,0,0,1,11.9,2.182,6.985,6.985,0,0,1,14.994,7.99Z"
        // transform-origin="0px 0px"
        // style="transform: none; transform-origin: 0px 0px;"
      ></path>
      <g
      // transform-origin="0px 0px"
      // style="transform: translateY(17px); transform-origin: 0px 0px;"
      >
        <circle cx="8.5" cy="8.5" r="3"></circle>
        {Array.from({ length: 8 }, (v, k) => (
          <line key={k} x1="8.5" y1="1" x2="8.5" y2="4"></line>
        ))}
        {/* <line x1="8.5" y1="1" x2="8.5" y2="4"></line>
        <line x1="13.803" y1="3.197" x2="13.096" y2="3.904"></line>
        <line x1="16" y1="8.5" x2="15" y2="8.5"></line>
        <line x1="13.803" y1="13.803" x2="13.096" y2="13.096"></line>
        <line x1="8.5" y1="16" x2="8.5" y2="15"></line>
        <line x1="3.197" y1="13.803" x2="3.904" y2="13.096"></line>
        <line x1="1" y1="8.5" x2="2" y2="8.5"></line>
        <line x1="3.197" y1="3.197" x2="3.904" y2="3.904"></line> */}
      </g>
    </svg>
  );
};

export default SvgThemeModeIcon;
