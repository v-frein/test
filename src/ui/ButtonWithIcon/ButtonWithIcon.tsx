import styles from "./ButtonWithIcon.module.css";

export const ButtonWithIcon = ({
  name,
  image,
}: {
  name: string;
  image: string;
}) => {
  return (
    <div className={styles.button}>
      <img src={image} />
      <p>{name}</p>
    </div>
  );
};
