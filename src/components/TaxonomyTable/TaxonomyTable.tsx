import { ButtonWithIcon } from "../../ui";

import styles from "./TaxonomyTable.module.css";

import editIcon from "../../assets/images/edit.png";

export const TaxonomyTable = () => {
  return (
    <div>
      <h1 className={styles.taxonomyHeading}>Таксономия</h1>
      <hr />
      <table>
        <tr>
          <td>Название</td>
          <td>Статус</td>
          <td>Источник</td>
          <td>Мета-узел</td>
          <td></td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={editIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={editIcon} />
            <ButtonWithIcon name="Раздел" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
          </td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={editIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={editIcon} />
            <ButtonWithIcon name="Раздел" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
          </td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={editIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={editIcon} />
            <ButtonWithIcon name="Раздел" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
          </td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={editIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={editIcon} />
            <ButtonWithIcon name="Раздел" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
          </td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={editIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={editIcon} />
            <ButtonWithIcon name="Раздел" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
          </td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={editIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={editIcon} />
            <ButtonWithIcon name="Раздел" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
          </td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={editIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={editIcon} />
            <ButtonWithIcon name="Раздел" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
          </td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={editIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={editIcon} />
            <ButtonWithIcon name="Раздел" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
            <ButtonWithIcon name="" image={editIcon} />
          </td>
        </tr>
      </table>
    </div>
  );
};
