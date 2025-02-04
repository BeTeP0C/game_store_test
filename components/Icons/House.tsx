import React from "react";
import styles from "./styles.module.scss"
import { IconProps } from "../../types/icons";

export function House ({width = 34, height = 36}: IconProps) {
  return (
    <span className={styles.house + " " + styles.menu}>
      <svg width={width} height={height} viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 34V20.6667C22 20.2246 21.8244 19.8007 21.5118 19.4882C21.1993 19.1756 20.7754 19 20.3333 19H13.6667C13.2246 19 12.8007 19.1756 12.4882 19.4882C12.1756 19.8007 12 20.2246 12 20.6667V34" stroke="#26292F" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 15.6664C1.99988 15.1816 2.10556 14.7025 2.30965 14.2626C2.51374 13.8228 2.81133 13.4328 3.18167 13.1198L14.8483 3.12145C15.45 2.61297 16.2123 2.33398 17 2.33398C17.7877 2.33398 18.55 2.61297 19.1517 3.12145L30.8183 13.1198C31.1887 13.4328 31.4863 13.8228 31.6904 14.2626C31.8944 14.7025 32.0001 15.1816 32 15.6664V30.6664C32 31.5505 31.6488 32.3983 31.0237 33.0235C30.3986 33.6486 29.5507 33.9998 28.6667 33.9998H5.33333C4.44928 33.9998 3.60143 33.6486 2.97631 33.0235C2.35119 32.3983 2 31.5505 2 30.6664V15.6664Z" stroke="#26292F" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  )
}
