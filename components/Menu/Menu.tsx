import React from "react";
import styles from "./styles.module.scss"
import { v4 as uuidv4 } from 'uuid';
import { Logo } from "../Icons";
import { MenuList } from "./MenuList";

export function Menu () {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <nav className={styles.nav}>
          <MenuList />
        </nav>
      </div>
    </div>
  )
}
