import { useEffect } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import Loader from "@/components/shared/Loader/Loader";
import BookingItem from "./BookingItem";

import { useAppDispatch } from "@/redux/hooks";
import { fetchAllBookings } from "@/redux/bookings/operations";
import {
  selectBookingStatus,
  selectBookings,
} from "@/redux/bookings/selectors";

import css from "./BookingsList.module.css";

const BookingsList = () => {
  const dispatch = useAppDispatch();
  const bookings = useSelector(selectBookings);
  const status = useSelector(selectBookingStatus);

  useEffect(() => {
    dispatch(fetchAllBookings());
  }, [dispatch]);

  if (status == "loading") {
    return <Loader />;
  } else if (status == "failed") {
    toast.error("Can't find bookings. Try again later");
  }

  return (
    <div className={css.container}>
      {bookings.length >= 1 ? (
        bookings.toReversed().map((booking) => {
          return <BookingItem key={booking.id} booking={booking} />;
        })
      ) : (
        <p className={css.text}>You don't have any bookings yet</p>
      )}
    </div>
  );
};

export default BookingsList;
