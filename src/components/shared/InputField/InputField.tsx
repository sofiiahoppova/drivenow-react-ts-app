import { Field, ErrorMessage } from "formik";

import css from "./InputField.module.css";

interface Props {
  label: string;
  id: string;
  placeholder?: string;
  reqiered?: true;
}

const InputField = ({ label, id, placeholder, reqiered }: Props) => {
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
