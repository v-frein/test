import { useState } from "react";
import DatePicker from "react-datepicker";

import { Button, ParameterWithDescription } from "../../../ui";

import styles from "./SetPeriod.module.css";

export const SetPeriod = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));

  return (
    <div className={styles.setPeriodContainer}>
      <div className={styles.infoContainer}>
        <ParameterWithDescription
          name="Охват на наших площадках за 15 дней"
          description="540,544"
          nameWidth="175px"
        />
        <ParameterWithDescription
          name="Охваты ТОП-100"
          description="5,901,859"
          nameWidth="175px"
        />
      </div>
      <div className={styles.setDateContainer}>
        <div className={styles.datePcikersContainer}>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            wrapperClassName={styles.datePicker}
            showPopperArrow={false}
          />
          <p className={styles.datePickerSeparator}>по</p>
          <DatePicker
            selected={endDate}
            onChange={(date: Date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            wrapperClassName={styles.datePicker}
            showPopperArrow={false}
          />
        </div>
        <Button name="Применить" bgColor="#6dbae5" textColor="white" />
      </div>
    </div>
  );
};
