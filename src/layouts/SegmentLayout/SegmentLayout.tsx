import styles from "./SegmentLayout.module.css";

export const SegmentLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.layout}>{children}</div>;
};
