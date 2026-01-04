import React from "react";

import css from "./Divider.module.css";

const Divider = () => {
  return (
    <div className={css.wrapper}>
      <span className={css.line} />
      <p className={css.text}>or</p>
      <span className={css.line} />
    </div>
  );
};

export default Divider;
