import React from "react";

import Logo from "../../shared/Logo/Logo";

import css from "./AuthLayout.module.css";

const AuthLayout = ({ children }) => {
  return (
    <div className={css.container}>
      <div className={css.logoWrapper}>
        <Logo />
      </div>
      {children}
      <div className={css.background} />
    </div>
  );
};

export default AuthLayout;
