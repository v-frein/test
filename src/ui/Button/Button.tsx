import styles from "./Button.module.css";

export const Button = ({
  name,
  bgColor,
  textColor,
}: {
  name: string;
  bgColor: string;
  textColor: string;
}) => {
  return (
    <div
      className={styles.button}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <p>{name}</p>
    </div>
  );
};
