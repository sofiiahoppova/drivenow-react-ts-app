import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import clsx from "clsx";

import { setClose } from "/src/redux/modal/modalSlice";
import { logOut } from "/src/redux/auth/operations";
import { clearUser } from "/src/redux/user/usersSlice";

import css from "./LogOutModal.module.css";

const LogOutModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logOut()).unwrap();
      toast.success("You have logged out");
      setClose();
      navigate("/autopark");
      await dispatch(clearUser()).unwrap();
    } catch (e) {
      toast.error(e);
    }
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Are you sure you want to Log Out?</h3>
      <p className={css.description}>
        Any booking information you're currently filling out will be lost.
      </p>
      <div className={css.wrapper}>
        <button className={css.btn} onClick={() => dispatch(setClose())}>
          Cancel
        </button>
        <button className={clsx(css.btn, css.btnAccent)} onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
