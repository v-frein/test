import { Table } from "./Table";

import { DialogWithTitle } from "../../ui/";

import styles from "./BuildingHistory.module.css";

const footer = (
  <div className={styles.footer}>
    <a href="#">Вся история →</a>
  </div>
);

export const BuildingHistory = () => {
  return (
    <DialogWithTitle name="Исттория построения" footer={footer}>
      <div>
        <Table />
      </div>
    </DialogWithTitle>
  );
};
