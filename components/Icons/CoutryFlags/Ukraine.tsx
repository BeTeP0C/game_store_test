import React from "react";
import styles from "../styles.module.scss"
import { IconProps } from "../../../types/icons";

export function Ukraine ({width = 21, height = 16}: IconProps) {
  return (
    <span className={styles.flag}>
      <svg width={width} height={height} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="21" height="16" rx="2" fill="url(#pattern0_11_449)"/>
        <defs>
        <pattern id="pattern0_11_449" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_11_449" transform="matrix(0.0138889 0 0 0.0182292 0 -0.15625)"/>
        </pattern>
        <image id="image0_11_449" width="72" height="72" xlinkHref="data:image/png;base64,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"/>
        </defs>
      </svg>
    </span>
  )
}
