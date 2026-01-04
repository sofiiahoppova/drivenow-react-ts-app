import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectMe } from "/src/redux/user/selectors";
import { setOpen } from "/src/redux/modal/modalSlice";

import css from "./AccountSideBar.module.css";

const AccountSideBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectMe);

  return (
    <aside className={css.sidebar}>
      <div className={css.userInfo}>
        <img
          src="/images/default-avatar.webp"
          alt="user avatar"
          className={css.avatar}
        />
        <div className={css.infoWrapper}>
          <span className={css.infoTitle}>Your Name</span>
          <p className={css.infoText}>{user.fullName}</p>
        </div>
        <div className={css.infoWrapper}>
          <span className={css.infoTitle}>Your Email</span>
          <p className={css.infoText}>{user.email}</p>
        </div>
      </div>
      <button
        onClick={() =>
          dispatch(
            setOpen({
              component: "LogOutModal",
            })
          )
        }
        className={css.logoutBtn}
      >
        Log Out
      </button>
    </aside>
  );
};

export default AccountSideBar;
