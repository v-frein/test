import styles from "./Type.module.css";

export const Type = ({ name }: { name: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.type}></div>
      {name}
    </div>
  );
};
