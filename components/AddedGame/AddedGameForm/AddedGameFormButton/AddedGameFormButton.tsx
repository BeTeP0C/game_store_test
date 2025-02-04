import React from "react";
import styles from "./styles.module.scss";
import { TGameFirstPageErrors, TGameError } from "../../../../types/tgames";

type TPackagesSelect = {
  title: string;
  countries: string[];
  id: string;
  price: number;
}[];

type TAddedGameFormButton = {
  setIsNextStep: React.Dispatch<React.SetStateAction<boolean>>;
  setEditionOptions: React.Dispatch<React.SetStateAction<any[]>>;
  packagesSelect: TPackagesSelect;
  errors: TGameFirstPageErrors;
  setErrors: React.Dispatch<React.SetStateAction<TGameError[]>>;
};

export function AddedGameFormButton(props: TAddedGameFormButton) {
  const {
    setIsNextStep,
    setEditionOptions,
    packagesSelect,
    errors,
    setErrors,
  } = props;
  const toNext = () => {
    let flag = false;
    const newErrors = errors.map((el) => {
      if (el.visible) {
        flag = true;

        return { ...el, activate: true };
      }
      return { ...el, activate: false };
    });

    setErrors(newErrors);

    if (!flag) {
      setIsNextStep(true);
      setEditionOptions(
        packagesSelect.map((el, index) => {
          return {
            title: el.title,
            id: el.id,
            store: "funpay",
            markup: null,
            regions: el.countries.map((country, number) => {
              return {
                region: country,
                briefDescr: "",
                fullDescr: "",
                active: number === 0,
              };
            }),
            price: el.price,
            active: index === 0,
            posted: false,
          };
        }),
      );
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={() => toNext()} className={styles.button} type="button">
        Далее
      </button>
    </div>
  );
}
