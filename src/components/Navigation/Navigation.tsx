import { PagesList } from "./PagesList";
import { Logout } from "./Logout";

import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.logoAndPagesContainer}>
          <p>Felix.DMP</p>
          <PagesList />
        </div>
        <Logout />
      </div>
    </div>
  );
};
