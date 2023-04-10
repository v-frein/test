import { SetPeriod } from "./SetPeriod";
import { Schedule } from "./Schedule";

import styles from "./CoverageSchedule.module.css";

export const CoverageSchedule = () => {
  return (
    <div className={styles.container}>
      <SetPeriod />
      <Schedule />
    </div>
  );
};
