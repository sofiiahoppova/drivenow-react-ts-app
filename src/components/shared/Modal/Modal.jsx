import React from "react";
import { useDispatch } from "react-redux";

import { setClose } from "/src/redux/modal/modalSlice";

import css from "./Modal.module.css";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.overlay}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={css.closeButton}
          onClick={() => dispatch(setClose())}
        >
          ✕
        </button>
        <div className={css.contentWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
