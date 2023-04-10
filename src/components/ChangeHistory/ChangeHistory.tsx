import { Table } from "./Table";

import { DialogWithTitle } from "../../ui";

import styles from "./ChangeHistory.module.css";

const footer = (
  <div className={styles.footer}>
    <a href="#">Вся история →</a>
  </div>
);

export const ChangeHistory = () => {
  return (
    <DialogWithTitle name="История посещений" footer={footer}>
      <div>
        <Table />
      </div>
    </DialogWithTitle>
  );
};
