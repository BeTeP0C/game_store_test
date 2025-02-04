import React from "react";
import styles from "./styles.module.scss";
import { AddedGameEditionCountries } from "../AddedGameEditionCountries";

type TAddedGameEditionItem = {
  title: string;
  coutries: string[];
  id: string;
  type?: string;
  funcs: {
    addPack: (id: string) => void;
    deletePack: (id: string) => void;
  };
};

export function AddedGameEditionItem({
  title,
  coutries,
  id,
  type = "choice",
  funcs,
}: TAddedGameEditionItem) {
  return (
    <li
      className={`${styles.edition} ${type === "select" ? styles.edition_select : ""}`}
    >
      <h4 className={styles.heading}>{title}</h4>
      <AddedGameEditionCountries countries={coutries} />

      {(() => {
        switch (type) {
          case "select":
            return (
              <button
                onClick={() => funcs.deletePack(id)}
                className={styles.delete}
                type="button"
              />
            );
          case "choice":
            return (
              <button
                onClick={() => funcs.addPack(id)}
                className={styles.select}
                type="button"
              />
            );
          default:
            return "";
        }
      })()}
    </li>
  );
}
