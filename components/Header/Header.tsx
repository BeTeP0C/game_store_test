import React, { useContext, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import { MagazineStore } from "../../common/store";
import { StoreContext } from "../MainPage";

export const Header = observer(() => {
  const store: MagazineStore = useContext(StoreContext);
  const [statusShow, setStatusShow] = useState(false);
  const steamRef = useRef(null);

  useEffect(() => {
    let flag = true;

    if (flag) {
      setTimeout(() => {
        setStatusShow(true);
      }, 250);
    }

    return () => {
      flag = false;
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.heading}>{store.settingsData.titleStore}</h1>

        <div className={styles.info}>
          {statusShow ? (
            <>
              <span
                ref={steamRef}
                data-testid="status"
                className={`
                    ${styles.status}
                    ${styles.steam}
                    ${(() => {
                      if (store.isLoadingConnectSteam) {
                        return styles.steam_loading;
                      }
                      if (store.isConnectSteam) {
                        return styles.steam_connect;
                      }
                      return styles.steam_unconnect;
                    })()}
                  `}
              >
                {"Steam: "}
                {(() => {
                  if (store.isLoadingConnectSteam) {
                    return "Подключение...";
                  }
                  if (store.isConnectSteam) {
                    return "Подключен";
                  }
                  return "Не подключен";
                })()}
              </span>
              <span
                data-testid="status"
                className={`${styles.status} ${styles.funpay} ${store.settingsData.funpayActivate ? styles.funpay_active : ""}`}
              >
                {"FunPay: "}
                {store.settingsData.funpayActivate ? "Активен" : "Не активен"}
              </span>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
});
