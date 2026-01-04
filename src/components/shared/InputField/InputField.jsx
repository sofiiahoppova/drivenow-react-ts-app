import React from "react";
import { Field, ErrorMessage } from "formik";

import css from "./InputField.module.css";

const InputField = ({ label, id, placeholder, reqiered = false }) => {
  return (
    <label className={css.wrapper}>
      <span className={css.label}>
        {label} {reqiered && <span className={css.reqiered}>*</span>}
      </span>
      <Field
        id={id}
        name={id}
        placeholder={placeholder}
        className={css.field}
      />
      <ErrorMessage name={id} component="span" className={css.error} />
    </label>
  );
};

export default InputField;
