import React from "react";
import styles from "./styles.module.scss"
import { IconProps } from "../../types/icons";

export function Stats ({width = 30, height = 30}: IconProps) {
  return (
    <span className={styles.stats + " " + styles.menu}>
      <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.6667 0H3.33333C2.44928 0 1.60143 0.351189 0.976311 0.976311C0.351189 1.60143 0 2.44928 0 3.33333V26.6667C0 27.5507 0.351189 28.3986 0.976311 29.0237C1.60143 29.6488 2.44928 30 3.33333 30H26.6667C27.5507 30 28.3986 29.6488 29.0237 29.0237C29.6488 28.3986 30 27.5507 30 26.6667V3.33333C30 2.44928 29.6488 1.60143 29.0237 0.976311C28.3986 0.351189 27.5507 0 26.6667 0ZM26.6667 26.6667H3.33333V3.33333H26.6667V26.6667ZM10 23.3333H6.66667V15H10V23.3333ZM16.6667 23.3333H13.3333V6.66667H16.6667V23.3333ZM23.3333 23.3333H20V11.6667H23.3333V23.3333Z" fill="#26292F"/>
      </svg>
    </span>
  )
}
