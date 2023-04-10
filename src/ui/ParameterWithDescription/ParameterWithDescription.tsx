import styles from "./ParameterWithDescription.module.css";

export const ParameterWithDescription = ({
  name,
  description,
  nameWidth,
}: {
  name: string;
  description: string | React.ReactNode;
  nameWidth?: string;
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.parameterName} style={{ width: nameWidth }}>
        {name}
      </p>
      {description}
    </div>
  );
};
