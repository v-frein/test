import styles from "./TaxonomyFilter.module.css";

export const TaxonomyFilter = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <p className={styles.heading}>{name}:</p>
      {children}
    </div>
  );
};
