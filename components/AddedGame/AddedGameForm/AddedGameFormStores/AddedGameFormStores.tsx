import React from "react";
import styles from "./styles.module.scss";
import { TEditionsOptions } from "../../../../types/edtitionInfo";

export function AddedGameFormStores(props: {
  editionsOptions: TEditionsOptions[];
}) {
  const { editionsOptions } = props;

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Магазин</h3>

      <ul className={styles.list}>
        <li key={1} className={styles.item}>
          <input
            className={styles.input}
            name="funpay"
            type="checkbox"
            id="funpay"
            checked={
              editionsOptions.find((el) => el.active)?.store === "funpay"
            }
          />
          <label className={styles.store} htmlFor="funpay">
            FunPay
          </label>
        </li>
      </ul>
    </div>
  );
}
