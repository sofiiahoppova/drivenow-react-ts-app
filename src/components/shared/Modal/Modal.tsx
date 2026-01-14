import React from "react";

import { useAppDispatch } from "@/redux/hooks";
import { setClose } from "@/redux/modal/modalSlice";

import css from "./Modal.module.css";

interface Props extends React.PropsWithChildren {}

const Modal = ({ children }: Props) => {
  const dispatch = useAppDispatch();

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
