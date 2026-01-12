import { Booking } from "@/types";

import { useAppDispatch } from "@/redux/hooks";
import { setOpen } from "@/redux/modal/modalSlice";

import css from "./BookingItem.module.css";

interface Props {
  booking: Booking;
}

const BookingItem = ({ booking }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div key={booking.id} className={css.container}>
      <div className={css.wrapper}>
        <h3 className={css.mainTitle}>Booking #{booking.id}</h3>
        <p className={css.title}>
          {booking.car.brand} {booking.car.model}
          {`(${booking.car.carClass})`}
        </p>
        <p className={css.text}>{booking.plan}</p>
      </div>
      <div className={css.wrapper}>
        <p className={css.text}>
          PickUp Date: {booking.startDate.split("T")[0]}
        </p>
        <p className={css.text}>
          DropOff Date: {booking.endDate.split("T")[0]}
        </p>
      </div>
      <div className={css.wrapper}>
        <button className={css.basicBtn} disabled>
          Update
        </button>
        <button
          className={css.transBtn}
          onClick={() =>
            dispatch(
              setOpen({
                component: "DeleteBookingModal",
                props: { id: booking.id },
              })
            )
          }
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingItem;
