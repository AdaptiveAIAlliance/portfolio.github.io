// /* Template for logo only button (height independent). */
// /* HTML */
// <div class="apple-pay-button apple-pay-button-white"></div>

// /* CSS */
// @supports (-webkit-appearance: -apple-pay-button) {
//     .apple-pay-button {
//         display: inline-block;
//         -webkit-appearance: -apple-pay-button;
//     }
//     .apple-pay-button-black {
//         -apple-pay-button-style: black;
//     }
//     .apple-pay-button-white {
//         -apple-pay-button-style: white;
//     }
//     .apple-pay-button-white-with-line {
//         -apple-pay-button-style: white-outline;
//     }
// }

// @supports not (-webkit-appearance: -apple-pay-button) {
//     .apple-pay-button {
//         display: inline-block;
//         background-size: 100% 60%;
//         background-repeat: no-repeat;
//         background-position: 50% 50%;
//         border-radius: 5px;
//         padding: 0px;
//         box-sizing: border-box;
//         min-width: 200px;
//         min-height: 32px;
//         max-height: 64px;
//     }
//     .apple-pay-button-black {
//         background-image: -webkit-named-image(apple-pay-logo-white);
//         background-color: black;
//     }
//     .apple-pay-button-white {
//         background-image: -webkit-named-image(apple-pay-logo-black);
//         background-color: white;
//     }
//     .apple-pay-button-white-with-line {
//         background-image: -webkit-named-image(apple-pay-logo-black);
//         background-color: white;
//         border: .5px solid black;
//     }
// }
// The following code example displays a Buy with Apple Pay button.

// /* Template for "Buy with" button with height: 32 */
// /* HTML */
// <div class="apple-pay-button-with-text apple-pay-button-white-with-text">
//   <span class="text">Buy with</span>
//   <span class="logo"></span>
// </div>

// /* CSS */
// @supports (-webkit-appearance: -apple-pay-button) {
//     .apple-pay-button-with-text {
//         display: inline-block;
//         -webkit-appearance: -apple-pay-button;
//         -apple-pay-button-type: buy;
//     }
//     .apple-pay-button-with-text > * {
//         display: none;
//     }
//     .apple-pay-button-black-with-text {
//         -apple-pay-button-style: black;
//     }
//     .apple-pay-button-white-with-text {
//         -apple-pay-button-style: white;
//     }
//     .apple-pay-button-white-with-line-with-text {
//         -apple-pay-button-style: white-outline;
//     }
// }

// @supports not (-webkit-appearance: -apple-pay-button) {
//     .apple-pay-button-with-text {
//         --apple-pay-scale: 1; /* (height / 32) */
//         display: inline-flex;
//         justify-content: center;
//         font-size: 12px;
//         border-radius: 5px;
//         padding: 0px;
//         box-sizing: border-box;
//         min-width: 200px;
//         min-height: 32px;
//         max-height: 64px;
//     }
//     .apple-pay-button-black-with-text {
//         background-color: black;
//         color: white;
//     }
//     .apple-pay-button-white-with-text {
//         background-color: white;
//         color: black;
//     }
//     .apple-pay-button-white-with-line-with-text {
//         background-color: white;
//         color: black;
//         border: .5px solid black;
//     }
//     .apple-pay-button-with-text.apple-pay-button-black-with-text > .logo {
//         background-image: -webkit-named-image(apple-pay-logo-white);
//         background-color: black;
//     }
//     .apple-pay-button-with-text.apple-pay-button-white-with-text > .logo {
//         background-image: -webkit-named-image(apple-pay-logo-black);
//         background-color: white;
//     }
//     .apple-pay-button-with-text.apple-pay-button-white-with-line-with-text > .logo {
//         background-image: -webkit-named-image(apple-pay-logo-black);
//         background-color: white;
//     }
//     .apple-pay-button-with-text > .text {
//         font-family: -apple-system;
//         font-size: calc(1em * var(--apple-pay-scale));
//         font-weight: 300;
//         align-self: center;
//         margin-right: calc(2px * var(--apple-pay-scale));
//     }
//     .apple-pay-button-with-text > .logo {
//         width: calc(35px * var(--scale));
//         height: 100%;
//         background-size: 100% 60%;
//         background-repeat: no-repeat;
//         background-position: 0 50%;
//         margin-left: calc(2px * var(--apple-pay-scale));
//         border: none;
//     }
// }
import { assetPathResolver } from "@/utils/utils";
import React, { ReactElement } from "react";
import { Parallax } from "react-parallax";
import styles from "./ApplePayBtn.module.css";
type Props = {
  children: ReactElement;
};
const BasicParallax = (props: Props): ReactElement => {
  return (
    <div className={(styles.applePayButton, styles.applePayButtonWhite)}></div>
  );
};

export default BasicParallax;