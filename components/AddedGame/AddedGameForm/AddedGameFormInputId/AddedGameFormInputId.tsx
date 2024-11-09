import React, { useRef } from "react";
import styles from "./styles.module.scss"
import img from "../../../../public/assassin's_creed_valhala.png"
import { TGameError } from "../../../../types/tgames";

type TAddedGameInputId = {
  setAppId: React.Dispatch<any>,
  title: string,
  idError: TGameError
}

export function AddedGameInputId ({setAppId, title, idError}: TAddedGameInputId) {
  const inputRef = useRef(null)

  const changeAppId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    clearTimeout(inputRef.current)

    inputRef.current = setTimeout(() => {
      setAppId(value)
    }, 500)

  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <label className={styles.title} htmlFor="id">
          App ID
          {idError.activate ? <span className={styles.error}>{idError.errorMessage}</span> : ""}
        </label>
        <input onChange={(e) => changeAppId(e)} className={styles.input} type="number" name="id"/>
      </div>

      <div className={styles.right}>
        {title ? <img className={styles.img} src={img.src} alt="" /> : ""}
        <h3 className={styles.heading}>{title}</h3>
      </div>
    </div>
  )
}
