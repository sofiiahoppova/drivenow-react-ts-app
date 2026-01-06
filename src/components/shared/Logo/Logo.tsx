import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Logo.module.css";

interface Props {
  color?: string;
}

const Logo = ({ color }: Props) => {
  return (
    <NavLink
      to="/"
      className={clsx(color == "white" && css.logoWhite, css.logo)}
    >
      DriveNow
    </NavLink>
  );
};

export default Logo;
