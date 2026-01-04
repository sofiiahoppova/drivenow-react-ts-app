import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Logo.module.css";

const Logo = ({ color = "blue" }) => {
  return (
    <NavLink
      to="/"
      className={clsx(color === "white" && css.logoWhite, css.logo)}
    >
      DriveNow
    </NavLink>
  );
};

export default Logo;
