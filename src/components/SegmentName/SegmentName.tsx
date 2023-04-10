import { Tag } from "../../ui/Tag";

import styles from "./SegmentName.module.css";

export const SegmentName = ({ name }: { name: string }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Сегмент « {name} »</p>
      <Tag name="Альфа" />
    </div>
  );
};
