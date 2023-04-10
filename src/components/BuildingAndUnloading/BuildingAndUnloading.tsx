import { DialogWithTitle, ParameterWithDescription } from "../../ui";

import styles from "./BuildingAndUnloading.module.css";

export const BuildingAndUnloading = () => {
  return (
    <DialogWithTitle
      name="Построение и выгрузка"
      bgColor="#fcf8e3"
      color="#a69a7c"
    >
      <div className={styles.BuildingAndUnloadingBlock}>
        <ParameterWithDescription
          nameWidth="151px"
          name="Онлайн-Сегмент"
          description=<p>dasdasd</p>
        />
        <ParameterWithDescription
          nameWidth="151px"
          name="Правила"
          description={
            <div>
              <p>
                Таблица:
                {
                  <span className={styles.tableName}>
                    ТестТестТестТестТестТест
                  </span>
                }
              </p>

              <div className={styles.tableRules}>
                <p>Тест</p>
                <p>Тест</p>
                <p>Тест</p>
              </div>
            </div>
          }
        />
        <ParameterWithDescription
          nameWidth="151px"
          name="Aerospike"
          description="Ага"
        />
        <ParameterWithDescription
          nameWidth="151px"
          name="Последняя нарезка"
          description="Ага"
        />
        <ParameterWithDescription
          nameWidth="151px"
          name="Последняя выгрузка"
          description="Ага"
        />
      </div>
    </DialogWithTitle>
  );
};
