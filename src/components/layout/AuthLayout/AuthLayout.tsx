import React from "react";

import Logo from "@/components/shared/Logo/Logo";

import css from "./AuthLayout.module.css";

interface Props extends React.PropsWithChildren {}

const AuthLayout = ({ children }: Props) => {
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
