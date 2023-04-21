import styles from "./Tag.module.css";

interface TagProps {
  name: string;
}

export const Tag = ({ name }: TagProps) => {
  return <div className={styles.tag}>{name}</div>;
};
