import React from "react";

import css from "./GoogleAuth.module.css";

const GoogleAuth = ({ name }) => {
  return (
    <button className={css.button}>
      {name} with Google
      <svg width={24} height={24}>
        <use href="/sprite.svg#icon-google"></use>
      </svg>
    </button>
  );
};

export default GoogleAuth;
