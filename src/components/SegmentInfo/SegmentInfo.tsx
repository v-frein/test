import { ParameterWithDescription, ButtonWithIcon } from "../../ui/";

import styles from "./SegmentInfo.module.css";

import editIcon from "../../assets/images/edit.png";

export const SegmentInfo = () => {
  return (
    <div className={styles.container}>
      <ParameterWithDescription name="Тест" description="Тест" />
      <ParameterWithDescription name="Тест" description="Тест" />
      <ParameterWithDescription name="Тест" description="Тест" />
      <ParameterWithDescription name="Тест" description="Тест" />
      <ParameterWithDescription name="Тест" description="Тест" />
      <ParameterWithDescription name="Тест" description="Тест" />
      <ParameterWithDescription name="Тест" description="Тест" />
      <div className={styles.buttonContainer}>
        <ButtonWithIcon name="Кнопка с иконкой" image={editIcon} />
      </div>
    </div>
  );
};
