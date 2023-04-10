import Select from "react-select";

import { TaxonomyFilter } from "./TaxonomyFilter";

import { DialogWithTitle } from "../../ui";

import styles from "./TaxonomyFilters.module.css";
import { FilterControls } from "./FilterControls";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const TaxonomyFilters = () => {
  return (
    <>
      <DialogWithTitle name="Фильтры">
        <div className={styles.container}>
          <TaxonomyFilter name="Статус">
            <Select options={options} />
          </TaxonomyFilter>
          <TaxonomyFilter name="Доступность">
            <Select options={options} />
          </TaxonomyFilter>
          <TaxonomyFilter name="Тэги">
            <Select options={options} />
          </TaxonomyFilter>
          <TaxonomyFilter name="Источник данных">
            <Select options={options} />
          </TaxonomyFilter>
          <TaxonomyFilter name="Охват за неделю">
            <div>
              <input />
              <input />
            </div>
          </TaxonomyFilter>
        </div>
      </DialogWithTitle>
      <FilterControls />
    </>
  );
};
