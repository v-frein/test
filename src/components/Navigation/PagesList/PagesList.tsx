import styles from "./PagesList.module.css";

export const PagesList = () => {
  return (
    <ul className={styles.container}>
      <li>Таксономия</li>
      <li>Сегменты</li>
      <li>Аудитория</li>
      <li>Модели</li>
      <li>Отчёты</li>
      <li className={styles.other}>
        Другие разделы
        <ul className={styles.dropdownList}>
          <li>Раздел 1</li>
          <li>Раздел 2</li>
          <li>Раздел 3</li>
        </ul>
      </li>
    </ul>
  );
};
