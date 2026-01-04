import React from "react";
import { Field } from "formik";

import css from "./DatesInputs.module.css";

const DatesInputs = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.inputWrapper}>
        <label htmlFor="pickup-date">Pick-Up Date</label>
        <Field
          className={css.dateInput}
          type="date"
          name="pickup"
          id="pickup-date"
        />
      </div>
      <div className={css.inputWrapper}>
        <label htmlFor="dropoff-date">Drop-Off Date</label>
        <Field
          className={css.dateInput}
          type="date"
          name="dropoff"
          id="dropoff-date"
        />
      </div>
    </div>
  );
};

export default DatesInputs;
