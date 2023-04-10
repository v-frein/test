import styles from "./RowContainer.module.css";

export const RowContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};
