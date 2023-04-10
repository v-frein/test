import styles from "./DialogWithTitle.module.css";

export const DialogWithTitle = ({
  name,
  children,
  bgColor,
  color,
  footer,
}: {
  name: string;
  children?: React.ReactNode;
  bgColor?: string;
  color?: string;
  footer?: React.ReactNode;
}) => {
  return (
    <div
      className={styles.container}
      style={{ border: `2px solid ${bgColor}` }}
    >
      <div className={styles.header} style={{ backgroundColor: bgColor }}>
        <p style={{ color: color }}>{name}</p>
      </div>
      <div className={styles.childrenContainer}>{children}</div>
      {footer && footer}
    </div>
  );
};
