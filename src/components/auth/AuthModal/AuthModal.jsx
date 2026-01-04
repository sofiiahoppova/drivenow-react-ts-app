import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import { setClose } from "/src/redux/modal/modalSlice";

import css from "./AuthModal.module.css";

const AuthModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigate("/signup");
    dispatch(setClose());
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Sign up to continue</h3>
      <p className={css.description}>
        This page is available only to registered users. Create an account to
        access bookings, manage your profile, and use all features.
      </p>
      <div className={css.wrapper}>
        <button className={css.btn} onClick={() => dispatch(setClose())}>
          Not Now
        </button>
        <button
          className={clsx(css.btn, css.btnAccent)}
          onClick={handleNavigate}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
