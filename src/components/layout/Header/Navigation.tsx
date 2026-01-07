import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import clsx from "clsx";

import { selectMe } from "../../../redux/user/selectors";

import css from "./Navigation.module.css";

interface Props {
  color: string;
  onClose?(): void;
  isMobile?: boolean;
}

const Navigation = ({ color, onClose, isMobile }: Props) => {
  const user = useSelector(selectMe);
  const buildLinkClass = ({ isActive }: { isActive: boolean }) => {
    return clsx(
      css.link,
      color === "black" && css.linkBlack,
      color === "white" && css.linkWhite,
      isActive && (color === "black" ? css.activeBlue : css.activeWhite)
    );
  };

  return (
    <div
      className={clsx(
        css.container,
        isMobile && css.mobile,
        !isMobile && css.hidden
      )}
      onClick={onClose}
    >
      <button className={css.closeButton} onClick={onClose}>
        ✕
      </button>
      <nav>
        <ul className={css.navList}>
          <li className={css.item}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </li>
          <li className={css.item}>
            <HashLink to={"/#about"} className={css.hashLink}>
              AboutUs
            </HashLink>
          </li>
          <li className={css.item}>
            <NavLink to="/policies" className={buildLinkClass}>
              Policies
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="/autopark" className={buildLinkClass}>
              AutoPark
            </NavLink>
          </li>
          {user && (
            <li className={css.item}>
              <NavLink to="/account" className={buildLinkClass}>
                Account: {user.fullName}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      {!user && (
        <ul className={css.auth}>
          <li>
            <Link to="/login" className={css.link}>
              Login
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/signup" className={css.link}>
              Register
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navigation;
