import { useEffect } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import clsx from "clsx";

import { useAppDispatch } from "@/redux/hooks";
import { deleteBooking } from "@/redux/bookings/operations";
import {
  selectBookingError,
  selectBookingStatus,
} from "@/redux/bookings/selectors";
import { setClose } from "@/redux/modal/modalSlice";

import css from "./DeleteBookingModal.module.css";

interface Props {
  id: number;
}

const DeleteBookingModal = ({ id }: Props) => {
  const dispatch = useAppDispatch();
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
