import styles from "./InputWithButton.module.css";

export const InputWithButton = ({ image }: { image: string }) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} />
      <div className={styles.button}>
        <img src={image} />
      </div>
    </div>
  );
};
