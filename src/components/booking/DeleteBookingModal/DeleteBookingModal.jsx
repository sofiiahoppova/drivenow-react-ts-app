import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import clsx from "clsx";

import { deleteBooking } from "/src/redux/bookings/operations";
import {
  selectBookingError,
  selectBookingStatus,
} from "/src/redux/bookings/selectors";
import { setClose } from "/src/redux/modal/modalSlice";

import css from "./DeleteBookingModal.module.css";

const DeleteBookingModal = ({ id }) => {
  const dispatch = useDispatch();
  const status = useSelector(selectBookingStatus);
  const error = useSelector(selectBookingError);

  useEffect(() => {
    if (status === "succeeded") {
      toast.success("Booking deleted successfully");
    }
    if (status === "failed") {
      toast.error(error);
    }
  }, [status, error]);

  const handleDelete = () => {
    setClose();
    dispatch(deleteBooking(id));
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>
        Are you sure you want to delete this booking?
      </h3>
      <p className={css.description}>
        This action cannot be undone, and all booking details will be
        permanently removed.
      </p>
      <div className={css.wrapper}>
        <button className={css.btn} onClick={() => dispatch(setClose())}>
          Cancel
        </button>
        <button className={clsx(css.btn, css.btnAccent)} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBookingModal;
