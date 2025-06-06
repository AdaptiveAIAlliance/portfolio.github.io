"use client";
import React, { FunctionComponent } from "react";
import svgStyles from "./SvgGridIcon.module.scss";

interface SvgGridIcon {
  isActive: boolean;
  className: string;
}
const SvgGridIcon: FunctionComponent<SvgGridIcon> = ({
  isActive,
  className,
}) => {
  return (
    <svg
      className={`${svgStyles.svgGridIcon} ${className} ${
        isActive ? " " + svgStyles.active : ""
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="32"
      height="32"
    >
      <title>Menu</title>
      <circle
        cx="12"
        cy="12"
        r="3"
        opacity="0"
        // transform-origin="0px 0px"
        // style="transform: translateX(-24px) translateY(-24px); transform-origin: 0px 0px;"
      ></circle>
      <circle
        className={svgStyles.midPoints}
        cx="24"
        cy="12"
        r="3"
        opacity="0"
        // transform-origin="0px 0px"
        // style="transform: translateX(0px) translateY(-24px); transform-origin: 0px 0px;"
      ></circle>
      <circle
        cx="36"
        cy="12"
        r="3"
        opacity="0"
        // transform-origin="0px 0px"
        // style="transform: translateX(24px) translateY(-24px); transform-origin: 0px 0px;"
      ></circle>
      <circle
        className={svgStyles.midPoints}
        cx="36"
        cy="24"
        r="3"
        opacity="0"
        // transform-origin="0px 0px"
        // style="transform: translateX(24px) translateY(0px); transform-origin: 0px 0px;"
      ></circle>
      <circle
        cx="36"
        cy="36"
        r="3"
        opacity="0"
        // transform-origin="0px 0px"
        // style="transform: translateX(24px) translateY(24px); transform-origin: 0px 0px;"
      ></circle>
      <circle
        className={svgStyles.midPoints}
        cx="24"
        cy="36"
        r="3"
        opacity="0"
        // transform-origin="0px 0px"
        // style="transform: translateX(0px) translateY(24px); transform-origin: 0px 0px;"
      ></circle>
      <circle
        cx="12"
        cy="36"
        r="3"
        opacity="0"
        // transform-origin="0px 0px"
        // style="transform: translateX(-24px) translateY(24px); transform-origin: 0px 0px;"
      ></circle>
      <circle
        className={svgStyles.midPoints}
        cx="12"
        cy="24"
        r="3"
        opacity="0"
        // transform-origin="0px 0px"
        // style="transform: translateX(-24px) translateY(0px); transform-origin: 0px 0px;"
      ></circle>
      <rect
        className={svgStyles.verticalRect}
        x="21"
        y="21"
        width="39.94px"
        height="6px"
        rx="3"
        ry="3"
        opacity="1"
        // transform-origin="0px 0px"
        // style="transform: translateX(-16.97px) translateY(0px); transform-origin: 0px 0px;"
      ></rect>
      <rect
        className={svgStyles.horizontalRect}
        x="21"
        y="21"
        width="6px"
        height="39.94px"
        rx="3"
        ry="3"
        opacity="1"
        // transform-origin="0px 0px"
        // style="transform: translateX(0px) translateY(-16.97px); transform-origin: 0px 0px;"
      ></rect>
    </svg>
  );
};

export default SvgGridIcon;
